import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
// fetch之后 走getstorage确认看看有没有store  没有的话 setstorage item  比如在其他页面的时候 就可以直接get   setup只在主页进行
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
      // image有大的有小的 用于预览或者整体展示
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
