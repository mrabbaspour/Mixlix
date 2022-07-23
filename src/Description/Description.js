import "./Description.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../Products/ProductsData";
import numberToPersian from "../Products/numberToPersian";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
export default function Description() {
  // params for routing :
  const [products, setProducts] = useState(productsData);
  let params = useParams();
  let mainProduct = products.find((p) => p.id === +params.pID);

  // add or minus product number :
  const [productNumber, setProductNumber] = useState(1);
  const addProductNumber = () => {
    if (productNumber === mainProduct.exitingNumber) {
      setProductNumber(mainProduct.exitingNumber);
    } else {
      setProductNumber((prev) => prev + 1);
    }
  };
  const minusProductNumber = () => {
    if (productNumber === 1) {
      setProductNumber(1);
    } else {
      setProductNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      <header style={{ backgroundColor: "#0f3b7eb8" }}>
        <Header />
      </header>
      <main>
        <div className="container">
          <div className="product-description-wrapper">
            <div className="product-description">
              <div className="product-desc-image">
                <img src={mainProduct.imgSrc} alt="product" />
              </div>
              <div className="product-desc-text">
                <h3 className="product-desc-title">{mainProduct.title}</h3>
                <div className="price-exiting">
                  <div className="price">
                    <span>{numberToPersian(mainProduct.price)} تومان</span>
                  </div>
                  <div className="exiting">
                    {mainProduct.exitingNumber ? (
                      <span className="yes-exiting">
                        {mainProduct.exitingNumber} عدد در انبار موجود است .
                      </span>
                    ) : (
                      <span className="no-exiting">
                        این محصول در انبار موجود نیست !
                      </span>
                    )}
                  </div>
                </div>
                <p className="desc-text">{mainProduct.description}</p>
                <div className="cart-managing">
                  <div className="number-of-product">
                    <button onClick={addProductNumber}>+</button>
                    <span>{numberToPersian(productNumber)}</span>
                    <button onClick={minusProductNumber}>-</button>
                  </div>
                  <div className="add-to-cart">
                    <button>اضافه کردن به سبد خرید</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
