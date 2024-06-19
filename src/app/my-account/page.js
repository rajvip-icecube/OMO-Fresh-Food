import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <>
      <Header />
      <main id="primary" className="site-main">
    <BannerInner name='My Account'/>

        <section className="page-details">
          <div className="container">
            <div className="entry-content"></div>
          </div>
        </section>
        <section className="my-account-details">
          <div className="container">
            <div className="entry-content">
              <div className="woocommerce">
              <NavBar />

                <div className="woocommerce-MyAccount-content">
                  <div className="woocommerce-notices-wrapper"></div>
                  <p>
                    Hello <strong>admin</strong> (not <strong>admin</strong>?
                    <a >
                      Log out
                    </a>
                    )
                  </p>

                  <p>
                    From your account dashboard you can view your
                    <a>
                      recent orders
                    </a>
                    , manage your
                    <a >
                      shipping and billing addresses
                    </a>
                    , and
                    <a >
                      edit your password and account details
                    </a>
                    .
                  </p>
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
