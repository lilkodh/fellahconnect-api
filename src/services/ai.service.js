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

    const reply = await groqService.generateResponse(messages);

    if (reply.tool_calls) {
      const toolCall = reply.tool_calls[0];

      const toolName = toolCall.function.name;

      const toolArguments = JSON.parse(toolCall.function.arguments);

      const tool = toolRegistry[toolName];

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

      const finalReply = await groqService.generateResponse(messages);
console.log("FINAL REPLY:");
console.dir(finalReply, { depth: null });
      return {
        success: true,
        response: finalReply.content,
      };
    }

    return {
      success: true,
      response: reply.content,
    };
  };
}

module.exports = new AIService();