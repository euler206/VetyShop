const express=require("express")
const router=express.Router();

const {getProducts, newProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) // Establecemos desde qyue ruta queremos ver el getProductos
router.route('/producto/nuevo').post(newProduct); //establecimeos la ruta



module.exports=router;