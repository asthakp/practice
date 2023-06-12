import product from "../model/product.model.js";

export const createProducts = async (req, res) => {
  try {
    const prods = await product.create(req.body);
    res.status(200).json({
      status: true,
      data: prods,
      message: "product created successfully",
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      message: error,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const prods = await product.find();
    res.status(200).json({
      status: true,
      data: prods,
      message: "products fetched successfully",
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      message: error,
    });
  }
};

export const updateProducts = async (req,res) => {
  try {
    const prod = await product.updateOne(
        { _id: req.params.id },
        {
          "$set":req.body
        }
      );
      res.status(200).json({
        status:true,
        data:prod,
        message:"product updated successfully"
      })
    
  } catch (error) {
    res.status(401).json({
        status: false,
        message: error.message,
      });
  }
};

export const deleteProducts=async(req,res)=>{
    try {
        const prod=await product.findOneAndDelete({_id:req.params.id})
        res.status(200).json({
            status:true,
            message:"product deleted successfully"
        })
        
    } catch (error) {
        res.status(401).json({
            status:false,
            message:error.message
        })
        
    }

}
