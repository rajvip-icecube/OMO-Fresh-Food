
import ShopByCategory from "./ShopByCategory";
import WhyChooseUS from "./WhyChooseUs";
import BestSeller from "./BestSeller";
import Trending from "./Trending";
import Customer from "./Customer";
import FollowUs from "./FollowUs";
export default function Banner() {

 
  return (
    <>
      <section
        className="banner pt-4 py-space"
        style={{
            background: 'url(/images/home-banner.jpg) no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
          }}
      >
        <div className="align-items-center container d-flex h-100">
          <div className="align-items-center row">
            <div className="col-lg-4">
              <div className="banner-content">
                <h1 className="display-1 fw-medium mb-4 text-white">
                  Nourishing Health Nurturing Wellness
                </h1>
                <a href="/products" className="btn btn-secondary fs-4 lh-1">
                  Shop now
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <figure>
                <img src="/images/banner-right.png" alt="banner-right" />
              </figure>
            </div>
          </div>
        </div>
      </section>
   <ShopByCategory />
<WhyChooseUS />
<BestSeller />
<Trending />
  <Customer />
<FollowUs />
    </>
  );
}
