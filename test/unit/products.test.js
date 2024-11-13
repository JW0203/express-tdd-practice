const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();

let req, res, next;
beforeEach(() =>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn(); // 어떤한 것과 호출이되는지 알기 위해 막함수 이용
})

describe('Products Controller', ()=>{
    beforeEach(() =>{
        req.body = newProduct;
    })
    it('Should have a createdProduct function', ()=>{
        expect(typeof productController.createProduct).toBe('function');
    })
    it ('Should call ProductModel.create', async () => {
        await productController.createProduct(req, res, next);
        expect(productModel.create).toBeCalled();
    })

    it('Should return 201 response code', async () => {
        await productController.createProduct(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled).toBeTruthy();
    })
    it("should return json body in response", async () => {
        productModel.create.mockReturnValue(newProduct)
        await productController.createProduct(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newProduct)
    })
    it('Should handle errors', async () => {
        const errorMessage = {message: 'Description property missing'};
        const rejectedPromise = Promise.reject(errorMessage);
        productModel.create.mockReturnValue(rejectedPromise)
        await productController.createProduct(req, res, next);
        expect(next).toBeCalledWith(errorMessage);
    })
})