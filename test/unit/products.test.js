const productController = require("../../controller/products");


describe('Products Controller', ()=>{
    it('Should have a createdProduct function', ()=>{
        expect(typeof productController.createProduct).toBe('function');
    })
})