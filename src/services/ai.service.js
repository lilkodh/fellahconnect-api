const groqService = require("./groq.service");
const systemPrompt = require("../prompts/system.prompt");
const toolRegistry = require("../config/toolRegistry");

class AIService {
  chat = async (message) => {
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

    let  reply = await groqService.generateResponse(messages);

    while  (reply.tool_calls) {
      const toolCall = reply.tool_calls[0];

      const toolName = toolCall.function.name;

      const toolArguments = JSON.parse(toolCall.function.arguments);

      const tool = toolRegistry[toolName];
      if (!tool) {
  return {
    success: false,
    message: `Unknown tool: ${toolName}`,
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

    return {
      success: true,
      response: reply.content,
    };
  };
}

module.exports = new AIService();