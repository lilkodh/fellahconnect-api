const groqService = require("./groq.service");
const systemPrompt = require("../prompts/system.prompt");
const toolRegistry = require("../config/toolRegistry");

class AIService {
  pendingAction = null;

  chat = async (message, user) => {
    if (
      this.pendingAction &&
      message.trim().toLowerCase() === "yes"
    ) {

      if (
        this.pendingAction.toolName === "createSaleOffer" &&
        user.role !== "farmer"
      ) {
        this.pendingAction = null;

        return {
          success: false,
          response: "You are not authorized to create sale offers.",
        };
      }

      const tool =
        toolRegistry[this.pendingAction.toolName];

      const result = await tool.execute(
        this.pendingAction.toolArguments
      );

      this.pendingAction = null;

      return {
        success: true,
        response: result.message,
      };
    }
    if (
      this.pendingAction &&
      message.trim().toLowerCase() === "cancel"
    ) {
      this.pendingAction = null;

      return {
        success: true,
        response: "Operation cancelled.",
      };
    }

    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: message,
      },
    ];

    let reply = await groqService.generateResponse(messages);

    const MAX_ITERATIONS = 5;
    let iteration = 0;

    while (reply.tool_calls && iteration < MAX_ITERATIONS) {
      iteration++;

      const toolCall = reply.tool_calls[0];

      const toolName = toolCall.function.name;

      const toolArguments = JSON.parse(
        toolCall.function.arguments
      );

      const tool = toolRegistry[toolName];

      if (!tool) {
        return {
          success: false,
          message: `Unknown tool: ${toolName}`,
        };
      }
      if (
        toolName === "createSaleOffer" &&
        user.role !== "farmer"
      ) {
        return {
          success: false,
          response:
            "You are not authorized to create sale offers.",
        };
      }
      if (toolName === "createSaleOffer") {

        this.pendingAction = {
          toolName,
          toolArguments,
        };

        return {
          success: true,
          response:
            "Are you sure you want to create this sale offer? Reply 'yes' to confirm or 'cancel' to abort.",
        };
      }

      const result = await tool.execute(toolArguments);

      messages.push({
        role: "assistant",
        content: null,
        tool_calls: reply.tool_calls,
      });

      messages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: JSON.stringify(result),
      });

      reply = await groqService.generateResponse(messages);
    }

    if (iteration === MAX_ITERATIONS) {
      return {
        success: false,
        message: "Maximum tool iterations reached.",
      };
    }

    return {
      success: true,
      response: reply.content,
    };
  };
}

module.exports = new AIService();