import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <>
      <Header />
      <BannerInner name="Addresses" />
      <main id="primary" className="site-main">
        <section className="my-account-details">
          <div className="container">
            <div className="entry-content">
              <div className="woocommerce">
            <NavBar />

                <div className="woocommerce-MyAccount-content">
                  <div className="woocommerce-notices-wrapper"></div>

                  <p>
                    The following addresses will be used on the checkout page by
                    default.
                  </p>

                  <div className="u-columns woocommerce-Addresses col2-set addresses">
                    <div className="u-column1 col-1 woocommerce-Address">
                      <header className="woocommerce-Address-title title">
                        <h3>Billing address</h3>
                        <a
                          href="/my-account/edit-address/billing"
                          className="edit"
                        >
                          Edit  
                        </a>
                      </header>
                      <address>
                        test est
                        <br />
                        test@gmail.com
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        New York, NY 10011{" "}
                      </address>
                    </div>

                    <div className="u-column2 col-2 woocommerce-Address">
                      <header className="woocommerce-Address-title title">
                        <h3>Shipping address</h3>
                        <a
                          href="/my-account/edit-address/shipping"
                          className="edit"
                        >
                          Edit
                        </a>
                      </header>
                      <address>
                        test est
                        <br />
                        test@gmail.com
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        New York, NY 10011{" "}
                      </address>
                    </div>
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
