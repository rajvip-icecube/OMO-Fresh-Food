'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createOrder } from "@/utils/woocommerce";
import Header from "@/components/Header";
import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [cartData, setCartData] = useState(null);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [companyname, setCompanyName] = useState('');


  const router = useRouter();

  useEffect(() => {
    const storedCartData = sessionStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  if (!cartData) {
    return <p>No items in the cart.</p>;
  }

  const { cartItems, quantities } = cartData;

  const calculateSubtotal = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const totalSubtotal = cartItems.reduce((total, item) => {
    return total + Number(calculateSubtotal(quantities[item.id] || 1, item.price));
  }, 0);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const lineItems = cartItems.map((item) => ({
      product_id: item.id,
      quantity: quantities[item.id] || 1,
    }));

    const orderData = {
      payment_method: "cod",
      payment_method_title: "Cash on Delivery",
      set_paid: false,
      billing: {
        first_name: firstname,
        last_name: lastname,
        address_1: "123 Main St",
        city: "Anytown",
        state: "CA",
        postcode: "12345",
        country: "US",
        email: "john.doe@example.com",
        phone: "555-555-5555",
      },
      shipping: {
        first_name: firstname,
        last_name: lastname,
        address_1: "123 Main St",
        city: "Anytown",
        state: "CA",
        postcode: "12345",
        country: "US",
      },
      line_items: lineItems,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "12.00",
        },
      ],
    };

    try {
      const newOrder = await createOrder(orderData);
      console.log("Order created successfully:", newOrder);
      sessionStorage.setItem("orderData", JSON.stringify(newOrder));
      router.push("/orders");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <><Header />
    <BannerInner name='Checkout'/>
    <main id="primary" className="site-main">
      <section className="checkout-details">
        <div className="container">
          <div className="entry-content">
            <div className="woocommerce">
              <div className="woocommerce-notices-wrapper"></div>
              <div className="woocommerce-form-coupon-toggle">
                <div className="woocommerce-info">
                  Have a coupon?{" "}
                  <a href="#" className="showcoupon">
                    Click here to enter your code
                  </a>{" "}
                </div>
              </div>

              <form
                className="checkout_coupon woocommerce-form-coupon"
                method="post"
              >
                <p>If you have a coupon code, please apply it below.</p>

                <p className="form-row form-row-first">
                  <label for="coupon_code" className="screen-reader-text">
                    Coupon:
                  </label>
                  <input
                    type="text"
                    name="coupon_code"
                    className="input-text"
                    placeholder="Coupon code"
                    id="coupon_code"
                    value="" />
                </p>

                <p className="form-row form-row-last">
                  <button
                    type="submit"
                    className="button"
                    name="apply_coupon"
                    value="Apply coupon"
                  >
                    Apply coupon
                  </button>
                </p>

                <div className="clear"></div>
              </form>
              <div className="woocommerce-notices-wrapper"></div>
              <form
                name="checkout"
                method="post"
                className="checkout woocommerce-checkout fs-6"
                onSubmit={handlePlaceOrder}
                enctype="multipart/form-data"
              >
                <div className="row g-4 gx-xxl-5">
                  <div className="col-12 col-md-7 col-lg-8 col-left">
                    <div
                      className="custom-row d-flex flex-column"
                      id="customer_details"
                    >
                      <div className="column mb-space-mini border border-2 border-secondary">
                        <div className="woocommerce-billing-fields">
                          <div className="heading-wrap bg-pinkplatinum">
                            <h3 className="title mb-0 text-uppercase fs-3">
                              Billing details
                            </h3>
                          </div>

                          <div className="woocommerce-billing-fields__field-wrapper">
                            <p
                              className="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label for="billing_first_name" className="">
                                First name&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_first_name"
                                  id="billing_first_name"
                                  placeholder=""
                                  value={firstname}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  autocomplete="given-name" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label for="billing_last_name" className="">
                                Last name&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_last_name"
                                  id="billing_last_name"
                                  placeholder=""
                                  value={lastname}
                                  onChange={(e) => setLastName(e.target.value)}
                                  autocomplete="family-name" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide"
                              id="billing_company_field"
                              data-priority="30"
                            >
                              <label for="billing_company" className="">
                                Company name&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_company"
                                  id="billing_company"
                                  placeholder=""
                                  value={companyname}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                  autocomplete="organization" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide address-field update_totals_on_change validate-required"
                              id="billing_country_field"
                              data-priority="40"
                            >
                              <label for="billing_country" className="">
                                Country / Region&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <strong>United States (US)</strong>
                                <input
                                  type="hidden"
                                  name="billing_country"
                                  id="billing_country"
                                  value="US"
                                  autocomplete="country"
                                  className="country_to_state"
                                  readonly="readonly" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide address-field validate-required"
                              id="billing_address_1_field"
                              data-priority="50"
                            >
                              <label for="billing_address_1" className="">
                                Street address&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_address_1"
                                  id="billing_address_1"
                                  placeholder="House number and street name"
                                  value="47 W 13th St, New York, NY 10011, USA"
                                  autocomplete="address-line1" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide address-field"
                              id="billing_address_2_field"
                              data-priority="60"
                            >
                              <label
                                for="billing_address_2"
                                className="screen-reader-text"
                              >
                                Apartment, suite, unit, etc.&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_address_2"
                                  id="billing_address_2"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  value="47 W 13th St, New York, NY 10011, USA"
                                  autocomplete="address-line2" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide address-field validate-required"
                              id="billing_city_field"
                              data-priority="70"
                            >
                              <label for="billing_city" className="">
                                Town / City&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_city"
                                  id="billing_city"
                                  placeholder=""
                                  value="New York"
                                  autocomplete="address-level2" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide address-field validate-required validate-state"
                              id="billing_state_field"
                              data-priority="80"
                            >
                              <label for="billing_state" className="">
                                State&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <select
                                  name="billing_state"
                                  id="billing_state"
                                  className="state_select "
                                  autocomplete="address-level1"
                                  data-placeholder="Select an option&hellip;"
                                  data-input-classNamees=""
                                  data-label="State"
                                >
                                  <option value="">
                                    Select an option&hellip;
                                  </option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="DC">
                                    District Of Columbia
                                  </option>
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
                              id="billing_postcode_field"
                              data-priority="90"
                            >
                              <label for="billing_postcode" className="">
                                ZIP Code&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="text"
                                  className="input-text "
                                  name="billing_postcode"
                                  id="billing_postcode"
                                  placeholder=""
                                  value="10011"
                                  autocomplete="postal-code" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide validate-required validate-phone"
                              id="billing_phone_field"
                              data-priority="100"
                            >
                              <label for="billing_phone" className="">
                                Phone&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="tel"
                                  className="input-text "
                                  name="billing_phone"
                                  id="billing_phone"
                                  placeholder=""
                                  value="1234567890"
                                  autocomplete="tel" />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide validate-required validate-email"
                              id="billing_email_field"
                              data-priority="110"
                            >
                              <label for="billing_email" className="">
                                Email address&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="email"
                                  className="input-text "
                                  name="billing_email"
                                  id="billing_email"
                                  placeholder=""
                                  value="test@gmail.com"
                                  autocomplete="email" />
                              </span>
                            </p>{" "}
                          </div>
                        </div>
                      </div>

                      <div className="column border mb-space-mini border-2 border-secondary">
                        <div className="woocommerce-shipping-fields">
                          <div className="heading-wrap bg-pinkplatinum">
                            <h3
                              className="title mb-0 text-uppercase fs-3"
                              id="ship-to-different-address"
                            >
                              <label className="wwoocommerce-form__label woocommerce-form__label-for-checkbox checkbox mb-0 d-flex gap-2">
                                <input
                                  id="ship-to-different-address-checkbox"
                                  className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                  type="checkbox"
                                  name="ship_to_different_address"
                                  value="1" />{" "}
                                <span>Ship to a different address?</span>
                              </label>
                            </h3>
                          </div>

                          <div className="shipping_address">
                            <div className="woocommerce-shipping-fields__field-wrapper">
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
                                    value={firstname}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autocomplete="given-name" />
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
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                    autocomplete="family-name" />
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
                                    value={companyname}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    autocomplete="organization" />
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
                                    readonly="readonly" />
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
                                    autocomplete="address-line1" />
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
                                    autocomplete="address-line2" />
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
                                    autocomplete="address-level2" />
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
                                    data-input-classNamees=""
                                    data-label="State"
                                  >
                                    <option value="">
                                      Select an option&hellip;
                                    </option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">
                                      District Of Columbia
                                    </option>
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
                                    <option value="AA">
                                      Armed Forces (AA)
                                    </option>
                                    <option value="AE">
                                      Armed Forces (AE)
                                    </option>
                                    <option value="AP">
                                      Armed Forces (AP)
                                    </option>
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
                                    autocomplete="postal-code" />
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                        </div>{" "}
                      </div>

                      <div className="column border border-2 border-secondary">
                        <div className="woocommerce-additional-fields">
                          <div className="woocommerce-additional-fields__field-wrapper">
                            <p
                              className="form-row notes"
                              id="order_comments_field"
                              data-priority=""
                            >
                              <label for="order_comments" className="">
                                Order notes&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <textarea
                                  name="order_comments"
                                  className="input-text "
                                  id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  rows="2"
                                  cols="5"
                                ></textarea>
                              </span>
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <wc-order-attribution-inputs></wc-order-attribution-inputs>
                  </div>

                  <div classNameName="col-12 col-md-5 col-lg-4 col-right">
                    <div classNameName="bg-primary text-white right-box">
                      <div classNameName="heading-wrap">
                        <h3 id="order_review_heading" classNameName="fs-2">Your order</h3>
                      </div>

                      <div id="order_review" classNameName="woocommerce-checkout-review-order">
                        <table classNameName="shop_table woocommerce-checkout-review-order-table">
                          <thead>
                            <tr>
                              <th classNameName="product-name">Product</th>
                              <th classNameName="product-total">Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={index} classNameName="cart_item">
                                <td classNameName="product-name">
                                  {item.name} <strong classNameName="product-quantity">× {quantities[item.id] || 1}</strong>
                                </td>
                                <td classNameName="product-total">
                                  <span classNameName="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span classNameName="woocommerce-Price-currencySymbol">&#36;</span>
                                      {calculateSubtotal(quantities[item.id] || 1, item.price)}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr classNameName="cart-subtotal">
                              <th>Subtotal</th>
                              <td>
                                <span classNameName="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span classNameName="woocommerce-Price-currencySymbol">&#36;</span>
                                    {totalSubtotal.toFixed(2)}
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                            <tr classNameName="shipping">
                              <th>Shipping</th>
                              <td data-title="Shipping">
                                <ul id="shipping_method" classNameName="woocommerce-shipping-methods">
                                  <li>
                                    <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate2" value="flat_rate:2" classNameName="shipping_method" />
                                    <label htmlFor="shipping_method_0_flat_rate2">
                                      Flat rate: <span classNameName="woocommerce-Price-amount amount"><bdi><span classNameName="woocommerce-Price-currencySymbol">&#36;</span>12.00</bdi></span>
                                    </label>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr classNameName="tax-rate">
                              <th>Tax</th>
                              <td>
                                <span classNameName="woocommerce-Price-amount amount">
                                  <span classNameName="woocommerce-Price-currencySymbol">&#36;</span>7.56
                                </span>
                              </td>
                            </tr>
                            <tr classNameName="order-total">
                              <th>Total</th>
                              <td>
                                <strong>
                                  <span classNameName="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span classNameName="woocommerce-Price-currencySymbol">&#36;</span>
                                      {(totalSubtotal + 12 + 7.56).toFixed(2)}
                                    </bdi>
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                        <div id="payment" classNameName="woocommerce-checkout-payment">
                          <ul classNameName="wc_payment_methods payment_methods methods">
                            <li classNameName="wc_payment_method payment_method_cod">
                              <input id="payment_method_cod" type="radio" classNameName="input-radio" name="payment_method" value="cod" defaultChecked data-order_button_text="" />
                              <label htmlFor="payment_method_cod">Cash on delivery</label>
                              <div classNameName="payment_box payment_method_cod">
                                <p>Pay with cash upon delivery.</p>
                              </div>
                            </li>
                          </ul>
                          <div classNameName="form-row place-order">
                            <button type="submit" classNameName="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">
                              Place order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
