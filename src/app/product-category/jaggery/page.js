'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { getProducts } from "../../../utils/woocommerce";
import SideBar from "@/components/SideBar";
import BannerInner from "@/components/BannerInner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [getProducts]);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const isProductCategory = true;
  return (
    <div>
      <Header />
      <BannerInner name="Products" isProductCategory={isProductCategory} productcategoryname="Jaggery"/>

      <section className="category-main py-space">
        <div className="container">
          <div className="row">
            <div className="woocommerce-notices-wrapper"></div>
          </div>
          <div className="row">
         <SideBar />

            <div className="col-lg-8 col-xl-9">
              <div className="woocommerce-order">
                <p className="woocommerce-result-count">
                  6 out of 12 products of product
                </p>
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="menu_order" selected="selected">
                      Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                  <input type="hidden" name="paged" value="1" />
                </form>
              </div>

              <ul className="products columns-3">
                {currentProducts.map((product) => (
                  <>
                    <li
                      key={index}
                      className="product type-product post-128 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple"
                    >
                      <div className="product-image">
                        <a>
                          <img
                            width="300"
                            height="300"
                            src={product.images[0].src}
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                            decoding="async"
                            fetchpriority="high"
                            sizes="(max-width: 300px) 100vw, 300px"
                          />
                        </a>
                      </div>

                      <div className="product-title">
                        <a>
                          <h2 className="woocommerce-loop-product__title">
                            {product.name}
                          </h2>
                        </a>
                      </div>

                      <div className="rating-price">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              {product.price}
                            </bdi>
                          </span>
                        </span>
                      </div>

                      <div className="cart-btns">
                        <a
                          className="woosq-btn woosq-btn-128 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                          data-id="128"
                          data-effect="mfp-fade"
                          data-context="default"
                          href={`/products/${product.id}`}
                        >
                          <span className="woosq-btn-icon woosq-icon-1"></span>
                        </a>
                        <a
                          data-quantity="1"
                          className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                          data-product_id="128"
                          data-product_sku=""
                          aria-label="Add to cart: &ldquo;Jaggery Balls&rdquo;"
                          aria-describedby=""
                          rel="nofollow"
                        >
                          Add to cart
                        </a>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
              <nav className="woocommerce-pagination">
                <ul className="page-numbers">
                  <li>
                    <button
                      aria-current="page"
                      className="page-numbers current"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <a className="next page-numbers">&rarr;</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
