import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home__row">
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/shirt/y/h/4/feedu101red-feed-up-44-original-imaegwwbnycxqh7m.jpeg?q=50"
        brand="FeedUp"
        product="Shirt"
        price={499}
      />
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/kf4ajrk0-0/shirt/l/7/x/s-whiteshirt01-ftc-fashions-original-imafvng3d839z53e.jpeg?q=50"
        brand="Neverland"
        product="Formal Shirt"
        price={599}
      />
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/kjiwfbk0-0/t-shirt/e/k/s/m-t305-as10yldnwh-seven-rocks-original-imafz2qfvx7tznnn.jpeg?q=50"
        brand="Noke"
        product="Shirt"
        price={699}
      />
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/kfeamq80-0/shirt/p/d/k/xl-bss-try-this-original-imafvvae4ghhy5pd.jpeg?q=50"
        brand="Abibas"
        product="Regular TShirt"
        price={799}
      />
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/kekadu80-0/t-shirt/m/d/t/xl-jrkbelvrl09-jorkk-original-imafv84yuhgzuamg.jpeg?q=50"
        brand="Versachi"
        product="Fit TShirt"
        price={899}
      />
      <Product
        img="https://rukminim1.flixcart.com/image/495/594/klfhk7k0/t-shirt/1/p/p/s-tblhdful-d32-tripr-original-imagyjxqcy3pk8bm.jpeg?q=50"
        brand="Geodart"
        product="Fitter TShirt"
        price={999}
      />
    </div>
  );
}

export default Home;
