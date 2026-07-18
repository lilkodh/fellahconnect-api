const tools = [
    {
        type: "function",
        function: {
            name: "getBestMarketPrice",
            description:
                "Returns the best market price for a given agricultural product.",
            parameters: {
                type: "object",
                properties: {
                    product: {
                        type: "string",
                        description: "The name of the agricultural product."
                    }
                },
                required: ["product"]
            }
        }
    }
];

module.exports = tools;