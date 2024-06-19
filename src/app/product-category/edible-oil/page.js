import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
const isProductCategory = true;
export default function page() {
  return (
    <>
    <Header />
    <BannerInner name="Products" isProductCategory={isProductCategory} productcategoryname="Edible-Oil"/>
  
        <section className="category-main py-space">
          <div className="container">
            <div className="row">
              <div className="woocommerce-notices-wrapper"></div>{" "}
            </div>
            <div className="row">
            <SideBar />
  
              <div className="col-lg-8 col-xl-9">
                <div className="bapf_no_products">
                  <div className="woocommerce-no-products-found">
                    <div className="woocommerce-info">
                      No products were found matching your selection.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  