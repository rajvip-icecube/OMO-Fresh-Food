"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/woocommerce";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Trending() {
  const options = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true,
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <>
      <section className="whats-trending py-space">
        <div className="container">
          <div className="heading-wrap mb-4 mb-lg-5">
            <h3 className="display-4 fw-medium mb-3 text-center text-secondary title">
              What's Trending
            </h3>
          </div>
         
            <div className="owl-theme" id="trendig-slider" options={options}>
            <Slider>
            {products.slice(0, 5).map((product) => (
              <div className="item">
                <div className="card px-3 py-4 rounded-4 text-center">
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
                      <a
                        href="#"
                        className="btn btn-primary fs-6 transparent_btn"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                  ))}
          </Slider>
            </div>
          
        </div>
      </section>
    </>
  );
}
