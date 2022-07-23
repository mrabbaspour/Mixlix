import productsData from "./ProductsData";
import Product from "./Product";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

import "./Product.css";
export default function Products() {
  // product pagination :
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageProducts, setCurrentPageProducts] = useState([]);

  let pageSize = 9;
  const pageCount = Math.ceil(productsData.length / pageSize);
  let changePageButtonsNumber = Array.from(Array(pageCount).keys());
  let endIndex = pageSize * currentPage;
  let startIndex = endIndex - pageSize;

  useEffect(() => {
    let shownProductsInPage = productsData.slice(startIndex, endIndex);
    setCurrentPageProducts(shownProductsInPage);
  }, []);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    let shownProductsInPage = productsData.slice(startIndex, endIndex);
    setCurrentPageProducts(shownProductsInPage);
  }, [currentPage]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="shop-bg">
          <h1>میکس لیکس</h1>
          <h4>فروشگاه</h4>
        </div>
        <div className="products">
          <div className="container">
            <div className="filter-search-products">
              <div className="search-products">
                <form>
                  <div>
                    <input type="text" placeholder="جستجو در محصولات ..." />
                  </div>
                  <div>
                    <i>
                      <BiSearchAlt />
                    </i>
                  </div>
                </form>
              </div>
              <div className="filter-products">
                <div className="categories">
                  <span>دسته بندی : </span>
                  <select>
                    <option value="all">همه</option>
                    <option value="women">زنان</option>
                    <option value="men">مردان</option>
                    <option value="vitamin">ویتامین</option>
                    <option value="amino">آمینو</option>
                    <option value="protein">پروتئین</option>
                  </select>
                </div>
                <div className="user-choise">
                  <span>فیلتر بر اساس : </span>
                  <select>
                    <option value="exiting">محصولات موجود</option>
                    <option value="expensive">گران ترین</option>
                    <option value="cheap">ارزان ترین</option>
                    <option value="new">جدید ترین</option>
                    <option value="old">قدیمی ترین</option>
                    <option value="sell">پر فروش ترین</option>
                  </select>
                </div>
                <div className="prices">
                  <span>قیمت از :</span>
                  <select>
                    <option value=""></option>
                    <option value="100000">100 هزار</option>
                    <option value="300000">300 هزار</option>
                    <option value="500000">500 هزار</option>
                    <option value="800000">800 هزار</option>
                    <option value="1200000">1 میلیون و 200 هزار</option>
                    <option value="1500000">1 میلیون و 500 هزار</option>
                    <option value="1800000">1 میلیون و 800 هزار</option>
                    <option value="2200000">2 میلیون و 200 هزار</option>
                    <option value="2600000">2 میلیون و 600 هزار</option>
                    <option value="3000000">3 میلیون</option>
                    <option value="3500000">3 میلیون و 500 هزار</option>
                  </select>
                  <span>تا :</span>
                  <select>
                    <option value=""></option>
                    <option value="100000">100 هزار</option>
                    <option value="300000">300 هزار</option>
                    <option value="500000">500 هزار</option>
                    <option value="800000">800 هزار</option>
                    <option value="1200000">1 میلیون و 200 هزار</option>
                    <option value="1500000">1 میلیون و 500 هزار</option>
                    <option value="1800000">1 میلیون و 800 هزار</option>
                    <option value="2200000">2 میلیون و 200 هزار</option>
                    <option value="2600000">2 میلیون و 600 هزار</option>
                    <option value="3000000">3 میلیون</option>
                    <option value="3500000">3 میلیون و 500 هزار</option>
                    <option value="4000000">4 میلیون</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {currentPageProducts.map((productItem) => (
                <div
                  className="product-item col-xl-4 col-lg-4 col-md-5 col-sm-10"
                  key={productItem.id}
                >
                  <Product {...productItem} />
                </div>
              ))}
            </div>
            <div className="pagination-btns">
              {changePageButtonsNumber.map((btn) => (
                <button
                  key={btn + 1}
                  className={`pagination-btn ${
                    btn + 1 === currentPage ? "active" : ""
                  }`}
                  onClick={() => changePage(btn + 1)}
                >
                  {btn + 1}
                </button>
              ))}
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
