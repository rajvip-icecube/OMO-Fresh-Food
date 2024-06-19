"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState, useContext } from "react";
import { getProducts } from "../../utils/woocommerce";
import SideBar from "@/components/SideBar";
import BannerInner from "@/components/BannerInner";
import useSortProducts from "@/utils/useSortProducts";
import ProductModal from "@/components/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "@/redux/addToCartSlice";
import { PriceFilterContext } from "@/context/PriceFilterContext";
import Link from "next/link";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { sortedProducts, sortOrder, sortProducts } = useSortProducts(products);
  const { price } = useContext(PriceFilterContext);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Products updated:", products);
    sortProducts(sortOrder);
  }, [products, sortOrder, sortProducts]);
  const filteredProducts = sortedProducts.filter(
    (product) => product.price <= price
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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

  const handleAddToCart = (product) => {
    const newItem = {
      ...product,
      quantity: 1,
    };
    dispatch(addItemToCart(newItem));
    console.log("cartcount", cartCount);
    console.log("Product added to cart:", product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="woocommerce">
      <Header />
      <BannerInner name="Products" />

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
                  {productsPerPage} out of {filteredProducts.length} products of
                  product
                </p>
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                    value={sortOrder}
                    onChange={(e) => sortProducts(e.target.value)}
                  >
                    <option value="menu_order">Default sorting</option>
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
                  <li
                    key={product.id}
                    className="product type-product post-128 status-publish first instock product_cat-jaggery has-post-thumbnail taxable shipping-taxable purchasable product-type-simple"
                  >
                    <div className="product-image">
                      <Link href={`/products/${product.id}`}>
                        <img
                          width="300"
                          height="300"
                          src={product.images[0].src}
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt={product.name}
                          decoding="async"
                          fetchpriority="high"
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                      </Link>
                    </div>

                    <div className="product-title">
                      <a href={`/products/${product.id}`}>
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
                      <button
                        className="woosq-btn woosq-btn-128 btn btn-secondary short-view woosq-btn-has-icon woosq-btn-icon-only"
                        data-id="128"
                        data-effect="mfp-fade"
                        data-context="default"
                        onClick={() => handleProductClick(product)}
                      >
                        <i class="fa fa-eye" aria-hidden="true"></i>
                      </button>
                      <button
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                        data-product_id="128"
                        data-product_sku=""
                        aria-label={`Add to cart: “${product.name}”`}
                        rel="nofollow"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </li>
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

      <ProductModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        product={selectedProduct}
      />
      <Footer />
    </div>
  );
}
