import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Header />
      <main id="primary" class="site-main">
        <section
          class="banner-inner py-space position-relative"
          style={{
            background:
              "url(https://www.omofreshfood.com/wp-content/themes/omo-fresh-food/images/category-banner-1.png) no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "bottom center",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-7 mb-4 mb-md-0">
                <div class="banner-content">
                  <h1 class="display-4 fw-medium mb-3 text-white">About Us</h1>
                  <div class="custom-breadcrumb">
                    <ul class="align-content-center d-flex flex-wrap gap-3 list-unstyled p-0">
                      <li>
                        <a
                          class="text-white"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      »<li>About Us</li>
                    </ul>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="page-details">
          <div class="container">
            <div class="entry-content"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
