import React, { useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  return (
    <div>
      <h2>Управління товарами</h2>

      <div>
        <input
          type="text"
          placeholder="Назва товару"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Ціна"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Категорія"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <button onClick={handleAddProduct}>Додати товар</button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price} грн ({product.category}){' '}
            <button onClick={() => handleDeleteProduct(product.id)}>Видалити</button>
            <button
              onClick={() =>
                handleUpdateProduct(product.id, {
                  name: 'Оновлений товар',
                  price: '1000',
                  category: 'Оновлена категорія',
                })
              }
            >
              Оновити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
