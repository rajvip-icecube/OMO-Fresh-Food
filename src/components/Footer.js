export default function Footer() {
  return (
    <div>
      <footer class="bg-blackgravel text-white">
        <div class="container">
          <div class="gy-md-0 py-space row">
            <div class="col-lg-3 col-md-12 mb-md-4 text-lg-start text-center">
              <div class="footer-logo mb-4 pb-1">
                <a class="" >
                  <img src="/images/footer-logo.png" alt="footer-logo" />
                </a>
              </div>
              <ul class="d-flex flex-column flex-wrap gap-3 list-unstyled">
                <li>
                  <img
                    src="/images/email-icon.png"
                    alt="email-icon"
                    class="me-3"
                  />
                  <a >info@omofreshfoods.com</a>
                </li>
                <li>
                  <img
                    src="/images/phon-icon.png"
                    alt="phon-icon"
                    class="me-3"
                  />
                  <a >+1 987 654 3210</a>
                </li>
              </ul>
            </div>
            <div class="col-5 col-lg-3 col-md-4 d-flex footer-menu justify-content-center my-4 my-lg-0">
              <div>
                <h5 class="fs-2 fw-bold mb-4 text-uppercase title">
                  Quick Links
                </h5>
                <ul class="d-flex flex-column flex-wrap gap-3 list-unstyled">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/blog">Blogs</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-7 col-lg-3 col-md-4 d-flex footer-menu justify-content-center my-4 my-lg-0">
              <div>
                <h5 class="fs-2 fw-bold mb-4 text-uppercase title">
                  Help &amp; Support
                </h5>
                <ul class="d-flex flex-column flex-wrap gap-3 list-unstyled">
                  <li>
                    <a >Customer Support</a>
                  </li>
                  <li>
                    <a >Order Status</a>
                  </li>
                  <li>
                    <a >Shipping &amp; Returns</a>
                  </li>
                  <li>
                    <a >My Account</a>
                  </li>
                  <li>
                    <a >FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-3 col-md-4 d-flex footer-social justify-content-center my-lg-0 my-md-4 pe-4 pe-md-3">
              <div>
                <h5 class="fs-2 fw-bold mb-4 text-uppercase title">
                  Follow us on
                </h5>
                <ul class="d-flex flex-column flex-wrap gap-3 list-unstyled">
                  <li class="align-items-center d-flex">
                    <img
                      src="/images/face-icon.png"
                      alt="face-icon"
                      class="me-2"
                    />
                    <a >Facebook</a>
                  </li>
                  <li class="align-items-center d-flex">
                    <img
                      src="/images/insta-icon.png"
                      alt="insta-icon"
                      class="me-2"
                    />
                    <a >Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-greydark d-flex flex-wrap justify-content-center payment-method px-3 py-4 rounded-3">
            <h5 class="font-cocogoose fs-2 fw-bold fw-medium mb-0 mb-3 mb-lg-0 me-lg-4 text-greymedium title">
              Payment Methods
            </h5>
            <ul class="d-flex flex-wrap gap-2 justify-content-center list-unstyled p-0">
              <li>
                <a >
                  <img src="/images/payment-1.png" alt="payment-1" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-2.png" alt="payment-2" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-3.png" alt="payment-3" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-4.png" alt="payment-4" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-5.png" alt="payment-5" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-6.png" alt="payment-6" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-7.png" alt="payment-7" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-8.png" alt="payment-8" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-9.png" alt="payment-9" />
                </a>
              </li>
              <li>
                <a >
                  <img src="/images/payment-10.png" alt="payment-10" />
                </a>
              </li>
            </ul>
          </div>
          <div class="copyright d-flex flex-wrap justify-content-center py-space-mini text-pinkgrey">
            <p class="mb-0 me-4">© 2024 OMO Fresh Foods</p>
            <ul class="d-flex gap-2 gap-4 justify-content-center list-unstyled p-0">
              <li class="position-relative">
                <a >Privacy</a>
              </li>
              <li class="position-relative">
                <a >Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
