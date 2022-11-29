const mockProducts = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
];

const createdProduct = { id: 3, name: 'ProductX' };

const returnServiceMock = {
  status: 200,
  message: mockProducts
}

const productNotFound = {
  status: 404,
  message: 'Product not found'
}

module.exports = {
  mockProducts,
  returnServiceMock,
  productNotFound,
  createdProduct,
}