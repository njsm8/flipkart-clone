import "./Product.css";

function Product({ img, brand, product, price }) {
  return (
    <div className="card">
      <img className="product-img" src={img} alt="logo" />
      <p className="brand">{brand}</p>
      <p className="product__details"> {product}</p>
      <p class="price__card"> {price}</p>
    </div>
  );
}

export default Product;
