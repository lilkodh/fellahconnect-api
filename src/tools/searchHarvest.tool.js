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
if(foundHarvests.length === 0){
    return {
    success: false,
    message: "No harvests found for this product.",
  };
}
return {
  success: true,
  product: productfound.name,
  harvests: foundHarvests.map((harvest) => ({
    id: harvest.id,
    parcel: harvest.Parcel?.name,
    farmer: harvest.Parcel?.Farmer?.firstName,
  })),
};



    }
}
module.exports = new searchHarvestTool();