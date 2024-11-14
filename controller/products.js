const productModel = require('../models/Product');

exports.createProduct = async (req, res, next) => {
    try{
        const createdProduct = await productModel.create(req.body);
        res.status(201).json(createdProduct);
    }catch (error) {
        next(error); // next 에 에러값을 넣어주면 비동기 요청에 대한 에러를 잘처리 할 수 있는 곳으로 보내준다.
    }
};