const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();

let req, res, next;
beforeEach(() =>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe('Products Controller', ()=>{
    beforeEach(() =>{
        req.body = newProduct;
    })
    it('Should have a createdProduct function', ()=>{
        expect(typeof productController.createProduct).toBe('function');
    })
    it ('Should call ProductModel.create', () => {
        let req = httpMocks.createRequest();
        let res = httpMocks.createResponse();
        let next = null;
        req.body = newProduct;
        productController.createProduct(req, res, next);
        expect(productModel.create).toBeCalled();
    })
})