const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const {
  returnServiceMock,
  productNotFound,
  mockProducts,
  createdProduct,
} = require('../../unit/mocks/product.mock');

const productService = require('../../../src/services/product.service');

const productController = require('../../../src/controllers/product.controller');



chai.use(sinonChai);

describe('Testes da Camada Product Controller', function () {
  afterEach(sinon.restore);
  
  describe('listagem de todos os produtos', function () {
    
    it('Se lista todos os produtos', async function () {
      sinon.stub(productService, 'serviceProductsGetAll').resolves(returnServiceMock);

      const req = {};
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.controllerProductsGetAll(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(returnServiceMock);
    });
  });

  describe('listagem de produtos por id', function () {

    it('Se lista produto procurado', async function () {
      sinon.stub(productService, 'serviceProductsGetById').resolves(mockProducts[0]);

      const res = {};
      const req = {
        params: {
          id: [1],
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.controllerProductsById(req, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(mockProducts[0]);
    });
  });

  describe('Cadastra um novo produto', function () {
    sinon
      .stub(productService, 'serviceProductsInsert')
      .resolves(createdProduct);

    it('é chamado o status com o código 201', async function () {
      const res = {};
      const req = {
        body: {
          name: 'ProductX',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.controllerProductsCreate(req, res);

      expect(res.status).to.have.been.calledOnceWith(201);
    });

  });

});

