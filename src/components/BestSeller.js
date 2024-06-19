'use client'
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/woocommerce";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector  } from "react-redux"
import { addItemToCart } from "@/redux/addToCartSlice";
export default function BestSeller(){
    const options = {
        items: 4,
        nav: true,
        rewind: true,
        autoplay: true,
      };
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const dispatch = useDispatch();
      const cartCount = useSelector(state => state.cart.cartCount);
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
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
      const handleAddToCart = (product) => {
        const newItem = {
          ...product,
          quantity: 1 
        };
        dispatch(addItemToCart(newItem));
        console.log("cartcount", cartCount)
        console.log("Product added to cart:", product);
      };
    return(
        <>
          <section className="best-seller bg-whitesmoke position-relative">
    <div className="container position-relative">
      <div className="heading-wrap mb-4 mb-lg-5">
        <h3 className="display-4 fw-medium mb-3 text-center text-secondary title">
          Best Seller
        </h3>
      </div>
      <div options={options} className="owl-theme" id="best-seller">
      <Slider>
      {products.slice(0, 4).map((product) => (
        <div className="item">
          <div className="card px-3 py-4 rounded-4 text-center border-0">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].src}
              title={product.name}
              alt={product.name}
            />
            <div className="card-body px-0">
              <h5 className="card-title fs-4 fw-bold">{product.name}</h5>
              <p className="card-price">{product.price}</p>
              <div className="card-btn">
                <a href="#" className="btn btn-secondary">
                  <img src="/images/view-icon.png" alt="view-icon" />
                </a>
                <button   onClick={() => handleAddToCart(product)} className="btn btn-primary fs-6 transparent_btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
        </Slider >
    
    </div>
    </div>
  </section>
        </>
    )
}