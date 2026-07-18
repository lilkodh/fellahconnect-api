const aiService = require("../services/ai.service");

class aiController {

    chat = async (req, res) => {

        const { message } = req.body;

        const response = await aiService.chat(message);

        return res.status(200).json(response);

    };

}

module.exports = new aiController();