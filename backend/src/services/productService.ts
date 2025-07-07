import productModel from "../models/productModel"

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: 'Dell Laptop',
        image:
          'https://esterad.com.eg/media/catalog/product/cache/9cd6e1189a86b1ad23367dafee2f721a/a/1/a132b266112bdab657338d70b2e8e9e4d9ebc1e2acac29d523a858c92b81c635.jpeg',
        price: 15000,
        stock: 10,
      },
      {
        title: 'Asus Laptop',
        image:
          'https://dlcdnwebimgs.asus.com/gain/7909b0a1-1457-4953-a9e7-41b2be78affa/',
        price: 25000,
        stock: 20,
      },
      {
        title: 'HP Laptop',
        image: 'https://m.media-amazon.com/images/I/41oB3VYKi5L.jpg',
        price: 40000,
        stock: 8,
      },
    ];
  
    const existingProducts = await getAllProducts();
  
    if(existingProducts.length === 0) {
      await productModel.insertMany(products)
    }
  } catch (err) {
    console.log("cannot see database", err);
  }

  
};

