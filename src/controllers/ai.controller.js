class aiController {
    chat = async (req, res) =>{ 
        const {message} = await req.body ;
        return res.status(200).json({
            success: true,
               message: "AI endpoint is working!",
            userMessage: message
        })

    }
}
module.exports = new aiController();
