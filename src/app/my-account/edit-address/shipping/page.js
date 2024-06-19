import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <>
      <Header />
      <BannerInner name="shipping" />
      <main id="primary" className="site-main">
        <section className="my-account-details">
          <div className="container">
            <div className="entry-content">
              <div className="woocommerce">
                <NavBar />

                <div className="woocommerce-MyAccount-content">
                  <div className="woocommerce-notices-wrapper"></div>

                  <form method="post">
                    <h3>Shipping address</h3>
                    <div className="woocommerce-address-fields">
                      <div className="woocommerce-address-fields__field-wrapper">
                        <p
                          className="form-row form-row-first validate-required"
                          id="shipping_first_name_field"
                          data-priority="10"
                        >
                          <label for="shipping_first_name" className="">
                            First name&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_first_name"
                              id="shipping_first_name"
                              placeholder=""
                              value="test"
                              autocomplete="given-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-last validate-required"
                          id="shipping_last_name_field"
                          data-priority="20"
                        >
                          <label for="shipping_last_name" className="">
                            Last name&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_last_name"
                              id="shipping_last_name"
                              placeholder=""
                              value="est"
                              autocomplete="family-name"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide"
                          id="shipping_company_field"
                          data-priority="30"
                        >
                          <label for="shipping_company" className="">
                            Company name&nbsp;
                            <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_company"
                              id="shipping_company"
                              placeholder=""
                              value="test@gmail.com"
                              autocomplete="organization"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field update_totals_on_change validate-required"
                          id="shipping_country_field"
                          data-priority="40"
                        >
                          <label for="shipping_country" className="">
                            Country / Region&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <strong>United States (US)</strong>
                            <input
                              type="hidden"
                              name="shipping_country"
                              id="shipping_country"
                              value="US"
                              autocomplete="country"
                              className="country_to_state"
                              readonly="readonly"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required"
                          id="shipping_address_1_field"
                          data-priority="50"
                        >
                          <label for="shipping_address_1" className="">
                            Street address&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_address_1"
                              id="shipping_address_1"
                              placeholder="House number and street name"
                              value="47 W 13th St, New York, NY 10011, USA"
                              autocomplete="address-line1"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field"
                          id="shipping_address_2_field"
                          data-priority="60"
                        >
                          <label
                            for="shipping_address_2"
                            className="screen-reader-text"
                          >
                            Apartment, suite, unit, etc.&nbsp;
                            <span className="optional">(optional)</span>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_address_2"
                              id="shipping_address_2"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              value="47 W 13th St, New York, NY 10011, USA"
                              autocomplete="address-line2"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required"
                          id="shipping_city_field"
                          data-priority="70"
                        >
                          <label for="shipping_city" className="">
                            Town / City&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_city"
                              id="shipping_city"
                              placeholder=""
                              value="New York"
                              autocomplete="address-level2"
                            />
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required validate-state"
                          id="shipping_state_field"
                          data-priority="80"
                        >
                          <label for="shipping_state" className="">
                            State&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <select
                              name="shipping_state"
                              id="shipping_state"
                              className="state_select "
                              autocomplete="address-level1"
                              data-placeholder="Select an option&hellip;"
                              data-input-classes=""
                              data-label="State"
                            >
                              <option value="">Select an option&hellip;</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY" selected="selected">
                                New York
                              </option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                              <option value="AA">Armed Forces (AA)</option>
                              <option value="AE">Armed Forces (AE)</option>
                              <option value="AP">Armed Forces (AP)</option>
                            </select>
                          </span>
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required validate-postcode"
                          id="shipping_postcode_field"
                          data-priority="90"
                        >
                          <label for="shipping_postcode" className="">
                            ZIP Code&nbsp;
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <span className="woocommerce-input-wrapper">
                            <input
                              type="text"
                              className="input-text "
                              name="shipping_postcode"
                              id="shipping_postcode"
                              placeholder=""
                              value="10011"
                              autocomplete="postal-code"
                            />
                          </span>
                        </p>{" "}
                      </div>

                      <p>
                        <button
                          type="submit"
                          className="button"
                          name="save_address"
                          value="Save address"
                        >
                          Save address
                        </button>
                        <input
                          type="hidden"
                          id="woocommerce-edit-address-nonce"
                          name="woocommerce-edit-address-nonce"
                          value="f55c952e9f"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/my-account/edit-address/shipping/"
                        />{" "}
                        <input
                          type="hidden"
                          name="action"
                          value="edit_address"
                        />
                      </p>
                    </div>
                  </form>
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
