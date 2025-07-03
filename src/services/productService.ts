import productModel from "../models/productModel"

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: 'Dell Laptop',
      image:
        'https://esterad.com.eg/media/catalog/product/cache/9cd6e1189a86b1ad23367dafee2f721a/a/1/a132b266112bdab657338d70b2e8e9e4d9ebc1e2acac29d523a858c92b81c635.jpeg',
      price: 15000,
      stock: 10,
    },
  ];

  const existingProducts = await getAllProducts();

  if(existingProducts.length === 0) {
    await productModel.insertMany(products)
  }
};

