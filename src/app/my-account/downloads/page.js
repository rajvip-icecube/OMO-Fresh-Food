import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <>
      <Header />
      <BannerInner name="Downloads" />
      <main id="primary" className="site-main">
        <section className="my-account-details">
          <div className="container">
            <div className="entry-content">
              <div className="woocommerce">
                <NavBar />
                <div className="woocommerce-MyAccount-content">
                  <div className="woocommerce-notices-wrapper"></div>
                  <div className="woocommerce-info">
                    No downloads available yet.
                    <a className="button wc-forward" href="/products">
                      Browse products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
