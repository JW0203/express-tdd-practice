const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require('node-mocks-http');

productModel.create = jest.fn();

describe('Products Controller', ()=>{
    it('Should have a createdProduct function', ()=>{
        expect(typeof productController.createProduct).toBe('function');
    })
    it ('Should call ProductModel.create', () => {
        let req = httpMocks.createRequest();
        let res = httpMocks.createResponse();
        let next = null;

        productController.createProduct(req, res, next);
        expect(productModel.create).toBeCalled();
    })
})