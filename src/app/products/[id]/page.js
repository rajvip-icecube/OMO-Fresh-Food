"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProductById } from "@/utils/woocommerce";
import { useEffect, useState } from "react";
export default function Page({ params }) {
  const { id } = params;
  console.log("ID", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
    <Header />
      {product ? (
        <div className="single-product">
          <div className="content-wrapper">
            <div className="single-product-notices">
              <div className="container">
                <div className="woocommerce-notices-wrapper"></div>
              </div>
            </div>

            <div
            
              className="product type-product post-128 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple"
            >
              <div className="single-product-summary">
                <div className="container">
                  <div
                    className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                    data-columns="4"
                    style={{
                        opacity: 0,
                        transition: 'opacity .25s ease-in-out'
                      }}
                  >
                  
                  </div>

                  <div className="summary entry-summary">
                    <div className="custom-breadcrumb">
                      <ul className="align-content-center d-flex flex-wrap gap-3 list-unstyled p-0">
                        <li>
                          <a
                            className="text-white"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        »
                        <li>
                          <a
                            className="text-white"
                            href="/products"
                          >
                            Products
                          </a>
                        </li>
                        »
                        <li>
                          <a
                            className="text-white"
                          >
                            Jaggery
                          </a>
                        </li>
                        »<li>{product.name}</li>
                      </ul>
                    </div>
                    <h1 className="product_title entry-title">{product.name}</h1>
            
                    <div className="align-items-center border border-2 border-end-0 border-pinkplatinum border-start-0 d-flex flex-wrap my-4 mb-3 price-wrapper py-2">
                      <h3 className="fs-4 m-0 pe-4 title">Price:</h3>
                      <p className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              &#36;
                            </span>
                           ${product.price}
                          </bdi>
                        </span>
                      </p>
                    </div>

                    <form
                      className="cart"
                      action="https://www.omofreshfood.com/product/jaggery-balls/"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <div className="price-wrapper quantity-wrapper">
                        <h3 className="fs-4 m-0 pe-4 title">Quantity:</h3>
                        <div className="quantity">
                          <label
                            className="screen-reader-text"
                            for="quantity_666049ac039d0"
                          >
                            {product.name} quantity
                          </label>
                          <input
                            type="button"
                            value="-"
                            className="qty_button minus"
                          />
                          <input
                            type="number"
                            id="quantity_666049ac039d0"
                            className="input-text qty text"
                            name="quantity"
                            value="1"
                            aria-label="Product quantity"
                            size="4"
                            min="1"
                            max=""
                            step="1"
                            placeholder=""
                            inputmode="numeric"
                            autocomplete="off"
                          />
                          <input
                            type="button"
                            value="+"
                            className="qty_button plus"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        name="add-to-cart"
                        value="128"
                        className="single_add_to_cart_button button alt"
                      >
                        Add to cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="product-tabs">
                <div className="container">
                  <div className="woocommerce-tabs wc-tabs-wrapper">
                    <ul className="tabs wc-tabs" role="tablist">
                      <li
                        className="description_tab"
                        id="tab-title-description"
                        role="tab"
                        aria-controls="tab-description"
                      >
                        <a >Description </a>
                      </li>
                      <li
                        className="ingredients_tab"
                        id="tab-title-ingredients"
                        role="tab"
                        aria-controls="tab-ingredients"
                      >
                        <a >Ingredients </a>
                      </li>
                      <li
                        className="reviews_tab"
                        id="tab-title-reviews"
                        role="tab"
                        aria-controls="tab-reviews"
                      >
                        <a>Reviews (0) </a>
                      </li>
                      <li
                        className="faqs_tab"
                        id="tab-title-faqs"
                        role="tab"
                        aria-controls="tab-faqs"
                      >
                        <a >Faqs </a>
                      </li>
                    </ul>
                    <div
                      className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                      id="tab-description"
                      role="tabpanel"
                      aria-labelledby="tab-title-description"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Vel illum qui dolorem eum fugiat
                        quo voluptas nulla pariatur.
                      </p>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur.
                      </p>
                      <ul>
                        <li>
                          Adipisci velit, sed quia non numquam eius modi tempora
                          incidunt
                        </li>
                        <li>
                          Ut labore et dolore magnam aliquam quaerat voluptatem.
                        </li>
                        <li>
                          Veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam
                        </li>
                        <li>
                          Nisi ut aliquid ex ea commodi consequatur quam nihil
                          molestiae
                        </li>
                        <li>
                          Quis autem vel eum iure reprehenderit qui in ea
                          voluptate velit esse
                        </li>
                        <li>
                          Consequatur, vel illum qui dolorem eum fugiat quo.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="woocommerce-Tabs-panel woocommerce-Tabs-panel--ingredients panel entry-content wc-tab"
                      id="tab-ingredients"
                      role="tabpanel"
                      aria-labelledby="tab-title-ingredients"
                    >
                      <div className="ingredients_section">
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur.
                        </p>
                      </div>
                    </div>
                    <div
                      className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                      id="tab-reviews"
                      role="tabpanel"
                      aria-labelledby="tab-title-reviews"
                    >
                      <div id="reviews" className="woocommerce-Reviews">
                        <div id="comments">
                          <h2 className="woocommerce-Reviews-title">Reviews </h2>

                          <p className="woocommerce-noreviews">
                            There are no reviews yet.
                          </p>
                        </div>

                        <div id="review_form_wrapper">
                          <div id="review_form">
                            <div id="respond" className="comment-respond">
                              <span
                                id="reply-title"
                                className="comment-reply-title"
                              >
                                Be the first to review &ldquo;Jaggery
                                Balls&rdquo;
                                <small>
                                  <a
                                    rel="nofollow"
                                    id="cancel-comment-reply-link"
                                  
                                  >
                                    Cancel reply
                                  </a>
                                </small>
                              </span>
                              <form
                                action="https://www.omofreshfood.com/wp-comments-post.php"
                                method="post"
                                id="commentform"
                                className="comment-form"
                                novalidate
                              >
                                <div className="comment-form-rating">
                                  <label for="rating">
                                    Your rating&nbsp;
                                    <span className="required">*</span>
                                  </label>
                                  <select name="rating" id="rating" required>
                                    <option value="">Rate&hellip;</option>
                                    <option value="5">Perfect</option>
                                    <option value="4">Good</option>
                                    <option value="3">Average</option>
                                    <option value="2">Not that bad</option>
                                    <option value="1">Very poor</option>
                                  </select>
                                </div>
                                <p className="comment-form-comment">
                                  <label for="comment">
                                    Your review&nbsp;
                                    <span className="required">*</span>
                                  </label>
                                  <textarea
                                    id="comment"
                                    name="comment"
                                    cols="45"
                                    rows="8"
                                    required
                                  ></textarea>
                                </p>
                                <p className="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="submit"
                                    value="Submit"
                                  />
                                  <input
                                    type="hidden"
                                    name="comment_post_ID"
                                    value="128"
                                    id="comment_post_ID"
                                  />
                                  <input
                                    type="hidden"
                                    name="comment_parent"
                                    id="comment_parent"
                                    value="0"
                                  />
                                </p>
                                <input
                                  type="hidden"
                                  id="_wp_unfiltered_html_comment_disabled"
                                  name="_wp_unfiltered_html_comment_disabled"
                                  value="9365dabcd9"
                                />
                                <script></script>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="clear"></div>
                      </div>
                    </div>
                    <div
                      className="woocommerce-Tabs-panel woocommerce-Tabs-panel--faqs panel entry-content wc-tab"
                      id="tab-faqs"
                      role="tabpanel"
                      aria-labelledby="tab-title-faqs"
                    >
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header fs-5" id="heading-1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                              aria-expanded="false"
                              aria-controls="collapse-1"
                            >
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur?
                            </button>
                          </h2>

                          <div
                            id="collapse-1"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading-1"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header fs-5" id="heading-2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                              aria-expanded="false"
                              aria-controls="collapse-2"
                            >
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur?
                            </button>
                          </h2>

                          <div
                            id="collapse-2"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading-2"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header fs-5" id="heading-3">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur?
                            </button>
                          </h2>

                          <div
                            id="collapse-3"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading-3"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header fs-5" id="heading-4">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-4"
                              aria-expanded="false"
                              aria-controls="collapse-4"
                            >
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur?
                            </button>
                          </h2>

                          <div
                            id="collapse-4"
                            className="accordion-collapse collapse"
                            aria-labelledby="heading-4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-related">
                <div className="container">
                  <div className="related-wrapper">
                    <div className="heading-wrap mb-4 mb-lg-5">
                      <h2 className="font-cocogoose fs-1 fw-medium mb-0 pb-2 text-center text-secondary title">
                        Related products
                      </h2>
                    </div>

                    <div className="owl-carousel owl-theme" id="related_products">
                      <div className="item">
                        <li className="product type-product post-140 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                          <div className="product-image">
                            <a>
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

                          <div className="product-title">
                            <a>
                              <h2 className="woocommerce-loop-product__title">
                                Jaggery Chocomilk (Copy)
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
                              aria-label="Add to cart: &ldquo;Jaggery Chocomilk (Copy)&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                      <div className="item">
                        <li className="product type-product post-131 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                          <div className="product-image">
                            <a>
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

                          <div className="product-title">
                            <a>
                              <h2 className="woocommerce-loop-product__title">
                                Jaggery Chocolate
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
                                  10.00
                                </bdi>
                              </span>
                            </span>
                          </div>

                          <div className="cart-btns">
                            <button
                              className="woosq-btn woosq-btn-131 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                              data-id="131"
                              data-effect="mfp-fade"
                              data-context="default"
                            >
                              <span className="woosq-btn-icon woosq-icon-1"></span>
                            </button>
                            <a
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="131"
                              data-product_sku=""
                              aria-label="Add to cart: &ldquo;Jaggery Chocolate&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                      <div className="item">
                        <li className="product type-product post-129 status-publish last instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
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

                          <div className="product-title">
                            <a>
                              <h2 className="woocommerce-loop-product__title">
                                Jaggery Cubes
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
                                  12.00
                                </bdi>
                              </span>
                            </span>
                          </div>

                          <div className="cart-btns">
                            <button
                              className="woosq-btn woosq-btn-129 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                              data-id="129"
                              data-effect="mfp-fade"
                              data-context="default"
                            >
                              <span className="woosq-btn-icon woosq-icon-1"></span>
                            </button>
                            <a
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="129"
                              data-product_sku=""
                              aria-label="Add to cart: &ldquo;Jaggery Cubes&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                      <div className="item">
                        <li className="product type-product post-139 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
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

                          <div className="product-title">
                            <a >
                              <h2 className="woocommerce-loop-product__title">
                                Jaggery Cubes (Copy)
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
                              aria-label="Add to cart: &ldquo;Jaggery Cubes (Copy)&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                      <div className="item">
                        <li className="product type-product post-132 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                          <div className="product-image">
                            <a >
                              <img
                                width="222"
                                height="221"
                                src="https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery.png"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcset="https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery.png 222w, https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery-100x100.png 100w, https://www.omofreshfood.com/wp-content/uploads/2024/05/matka-jaggery-150x150.png 150w"
                                sizes="(max-width: 222px) 100vw, 222px"
                              />
                            </a>
                          </div>

                          <div className="product-title">
                            <a >
                              <h2 className="woocommerce-loop-product__title">
                                Matka Jaggery
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
                                  10.00
                                </bdi>
                              </span>
                            </span>
                          </div>

                          <div className="cart-btns">
                            <button
                              className="woosq-btn woosq-btn-132 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                              data-id="132"
                              data-effect="mfp-fade"
                              data-context="default"
                            >
                              <span className="woosq-btn-icon woosq-icon-1"></span>
                            </button>
                            <a
                              data-quantity="1"
                              className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                              data-product_id="132"
                              data-product_sku=""
                              aria-label="Add to cart: &ldquo;Matka Jaggery&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                      <div className="item">
                        <li className="product type-product post-138 status-publish instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
                          <div className="product-image">
                            <a >
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

                          <div className="product-title">
                            <a>
                              <h2 className="woocommerce-loop-product__title">
                                Jaggery Balls (Copy)
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
                              aria-label="Add to cart: &ldquo;Jaggery Balls (Copy)&rdquo;"
                              aria-describedby=""
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
}
