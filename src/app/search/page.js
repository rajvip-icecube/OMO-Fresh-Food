"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchProducts } from "../../utils/woocommerce";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerInner from "@/components/BannerInner";
import SideBar from "@/components/SideBar";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract query from the URL
    const queryParam = new URLSearchParams(window.location.search).get("query");
    setQuery(queryParam || "");

    if (queryParam) {
      fetchProducts(queryParam);
    }

    async function fetchProducts(searchQuery) {
      try {
        setLoading(true);
        const products = await searchProducts(searchQuery);
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false); // Ensure loading state is set to false in case of error
      }
    }
  }, [router]);
  const isSearch = true;
  return (
    <>
      <Header />
      <BannerInner isSearch={isSearch} searchname={query} />
      <section className="category-main py-space">
        <div className="container">
          <div className="row">
            <div className="woocommerce-notices-wrapper"></div>{" "}
          </div>
          <div className="row">
         <SideBar />

            <div className="col-lg-8 col-xl-9">
              <div className="woocommerce-order">
                <p className="woocommerce-result-count">
                  6 out of 10 products of product
                </p>
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="relevance" selected="selected">
                      Relevance
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
                  <input type="hidden" name="s" value="Jaggery" />
                  <input type="hidden" name="post_type" value="product" />
                </form>
              </div>

              <ul className="products columns-3">
                <li className="product type-product post-143 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a >
                      <img
                        width="210"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-powder.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a >
                        <h2 className="woocommerce-loop-product__title">
                          Jaggery Powder (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            10.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-143 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="143"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="143"
                        data-product_sku=""
                        aria-label="Add to cart: “Jaggery Powder (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="product type-product post-142 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a >
                      <img
                        width="222"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        srcset="https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery.png 222w, https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery-100x100.png 100w, https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery-150x150.png 150w"
                        sizes="(max-width: 222px) 100vw, 222px"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a>
                        <h2 className="woocommerce-loop-product__title">
                          Matka Jaggery (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            10.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-142 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="142"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="142"
                        data-product_sku=""
                        aria-label="Add to cart: “Matka Jaggery (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="product type-product post-141 status-publish last instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a >
                      <img
                        width="250"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-chocolate.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a >
                        <h2 className="woocommerce-loop-product__title">
                          Jaggery Chocolate (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            10.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-141 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="141"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="141"
                        data-product_sku=""
                        aria-label="Add to cart: “Jaggery Chocolate (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="product type-product post-140 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a >
                      <img
                        width="217"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-chocomilk.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a>
                        <h2 className="woocommerce-loop-product__title">
                          Jaggery Chocomilk (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            12.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-140 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="140"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="140"
                        data-product_sku=""
                        aria-label="Add to cart: “Jaggery Chocomilk (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="product type-product post-139 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a >
                      <img
                        width="221"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-cubs.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcset="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-cubs.png 221w, https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-cubs-100x100.png 100w, https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-cubs-150x150.png 150w"
                        sizes="(max-width: 221px) 100vw, 221px"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a >
                        <h2 className="woocommerce-loop-product__title">
                          Jaggery Cubes (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            12.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-139 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="139"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="139"
                        data-product_sku=""
                        aria-label="Add to cart: “Jaggery Cubes (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
                <li className="product type-product post-138 status-publish last instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                  <div className="product-image">
                    <a>
                      <img
                        width="207"
                        height="221"
                        src="https://www.omofreshfood.com/wp-content/uploads/2024/05/jaggery-balls.png"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <div className="align-items-end d-flex flex-wrap justify-content-center text-center">
                    <div className="product-title">
                      <a>
                        <h2 className="woocommerce-loop-product__title">
                          Jaggery Balls (Copy)
                        </h2>
                      </a>
                    </div>

                    <div className="rating-price w-100">
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            10.00
                          </bdi>
                        </span>
                      </span>
                    </div>

                    <div className="cart-btns">
                      <button
                        className="woosq-btn woosq-btn-138 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="138"
                        data-effect="mfp-fade"
                        data-context="default"
                      >
                        <span className="woosq-btn-icon woosq-icon-1"></span>
                      </button>
                      <a
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="138"
                        data-product_sku=""
                        aria-label="Add to cart: “Jaggery Balls (Copy)”"
                        aria-describedby=""
                        rel="nofollow"
                      >
                        Add to cart
                      </a>{" "}
                    </div>
                  </div>
                </li>
              </ul>
              <nav className="woocommerce-pagination">
                <ul className="page-numbers">
                  <li>
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                  </li>
                  <li>
                    <a
                      className="page-numbers"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className="next page-numbers"
                    >
                      →
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Search;
