const { where, Model } = require("sequelize");
const {Harvest , Product , Parcel , Farmer}= require("../models");
class searchHarvestTool{
    execute = async ({product} ) =>{
const productfound = await Product.findOne({
    where:{
        name : product
    }
})
if(!productfound){
    return{
        success: false,
        message:"product not found ",
    }
}
const foundHarvests =  await Harvest.findAll({
    where:{
productId: productfound.id
    },
  include: [
  {
    model: Parcel,
    include: [
      {
        model: Farmer,
      },
    ],
  },
]
})
return{
     success: true,
  product: productfound.name,
  harvest:foundHarvests
}



    }
}
module.exports = new searchHarvestTool();