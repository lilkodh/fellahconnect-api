class Aiservice {
   chat  =  async (message) =>{
        return {
          success : true ,
        message: "AI Service is working!",
        userMessage: message
    }
      }
}

module.exports = {chat}