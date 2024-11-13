const productController = require("../../controller/products");
const productModel = require("../../models/Product");

describe('Products Controller', ()=>{
    it('Should have a createdProduct function', ()=>{
        expect(typeof productController.createProduct).toBe('function');
    })
    it ('Should call ProductModel.create', () => {
        productController.createProduct();
        expect(productModel.create).toBeCalled();

    })
})