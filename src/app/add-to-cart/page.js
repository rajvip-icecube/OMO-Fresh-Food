"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";
import BannerInner from "@/components/BannerInner";
import { removeItemFromCart } from "@/redux/addToCartSlice";
export default function Page() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();
  console.log("CartItems", cartItems);
  const router = useRouter();
  console.log("CartCount from cartCount", cartCount);

  const [quantities, setQuantities] = useState({});

  const handleShipping = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "cartData",
      JSON.stringify({ cartItems, quantities })
    );
    router.push("/checkout");
  };
const handleRemove = (itemId) => {
  dispatch(removeItemFromCart({id : itemId}))
}
  const incrementQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]:
        prevQuantities[itemId] === undefined ? 1 : prevQuantities[itemId] + 1,
    }));
  };

  const decrementQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1, 
      }));
    } else {
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[itemId];
        return updatedQuantities;
      });
    }
  };

  const calculateSubtotal = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const totalSubtotal = cartItems.reduce((total, item) => {
    return (
      total + Number(calculateSubtotal(quantities[item.id] || 1, item.price))
    );
  }, 0);
  return (
    <>
      <Header />
      <BannerInner name="Cart" />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <section className="cart-details">
          <div className="container">
            <div className="entry-content">
              <div className="woocommerce">
                <div className="cart-top pb-space fs-6">
                  <div className="woocommerce-notices-wrapper"></div>
                  <form
                    className="woocommerce-cart-form"
                   
                    method="post"
                  >
                    {cartItems.map((item) => (
                      <div className="table-responsive order-1 w-100 mb-space-mini">
                        <table
                          className="shop_table shop_table_responsive cart woocommerce-cart-form__contents table overflow-hidden mb-0"
                          cellspacing="0"
                        >
                          <thead>
                            <tr>
                              <th className="product-thumbnail text-uppercase bg-pinkplatinum border-0 text-start border-2 border border-secondary">
                                Image
                              </th>
                              <th className="product-name text-uppercase bg-pinkplatinum border-0 border-2 border border-secondary">
                                Product
                              </th>
                              <th className="product-price text-uppercase bg-pinkplatinum border-0 text-center border-2 border border-secondary">
                                Price
                              </th>
                              <th className="product-quantity text-uppercase bg-pinkplatinum border-0 text-center border-2 border border-secondary">
                                Qty
                              </th>
                              <th className="product-remove text-uppercase bg-pinkplatinum border-0 border-2 border border-secondary">
                                &nbsp;
                              </th>
                              <th className="product-subtotal text-uppercase bg-pinkplatinum border-0 text-end border-2 border border-secondary">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="woocommerce-cart-form__cart-item cart_item">
                              <td
                                className="product-thumbnail border-bottom border-2 border-pinkplatinum border-start align-middle text-start"
                                data-title="Product Images"
                              >
                                <a>
                                  <img
                                    decoding="async"
                                    width="300"
                                    height="300"
                                    src={item.images[0].src}
                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                    alt=""
                                    sizes="(max-width: 300px) 100vw, 300px"
                                  />
                                </a>
                              </td>

                              <td
                                className="product-name border-bottom border-2 border-pinkplatinum align-middle"
                                data-title="Product"
                              >
                                <a>{item.name}</a>
                              </td>

                              <td
                                className="product-price border-bottom border-2 border-pinkplatinum text-center align-middle text-black text-opacity-50"
                                data-title="Price"
                              >
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    {item.price}
                                  </bdi>
                                </span>
                              </td>

                              <td
                                className="product-quantity border-bottom border-2 border-pinkplatinum text-center align-middle"
                                data-title="Quantity"
                              >
                                <div className="price-wrapper quantity-wrapper">
                                  <h3 className="fs-4 m-0 pe-4 title">
                                    Quantity:
                                  </h3>
                                  <div className="quantity">
                                    <label className="screen-reader-text">
                                      {item.nmae}
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() => decrementQuantity(item.id)}
                                      className="qty_button minus"
                                    />
                                    <input
                                      type="number"
                                      className="input-text qty text"
                                      value={quantities[item.id] || 1}
                                      aria-label="Product quantity"
                                      onChange={(e) => {
                                        const newValue = parseInt(
                                          e.target.value
                                        );
                                        setQuantities((prevQuantities) => ({
                                          ...prevQuantities,
                                          [item.id]:
                                            newValue > 0 ? newValue : 1,
                                        }));
                                      }}
                                    />
                                    <button
                                      onClick={() => incrementQuantity(item.id)}
                                      type="button"

                                        className="qty_button plus"
                                    />
                                  </div>
                                </div>
                              </td>

                              <td className="product-remove border-bottom border-2 border-pinkplatinum align-middle">
                                <button
                                     onClick={() => handleRemove(item.id)}
                                  className="remove"
                                 
                                >
                                  ×
                                </button>
                              </td>

                              <td
                                className="product-subtotal border-bottom border-2 border-pinkplatinum border-end align-middle text-end text-primary"
                                data-title="Subtotal"
                              >
                                <span className="woocommerce-Price-amount amount">
                                  <bdi key={index}>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    {calculateSubtotal(
                                      quantities[item.id] || 1,
                                      item.price
                                    )}
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}

                    <div className="cart-poupon order-2 w-100">
                      <div className="row">
                        <div className="col-12 col-md-7 col-lg-6 col-xxl-5 col-left mb-space-mini mb-md-0">
                          <div className="coupon">
                            <label
                              for="coupon_code"
                              className="screen-reader-text"
                            >
                              Coupon:
                            </label>
                            <input
                              type="text"
                              name="coupon_code"
                              className="input-text"
                              id="coupon_code"
                              value=""
                              placeholder="Coupon code"
                            />
                            <button
                              type="submit"
                              className="button"
                              name="apply_coupon"
                              value="Apply coupon"
                            >
                              Apply coupon
                            </button>
                          </div>
                          <div className="cart-page-buttons d-flex flex-wrap align-items-center row g-3 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                            <div className="continue-shopping col">
                              <a className="btn bg-pinkplatinum w-100 rounded-0">
                                Continue Shopping
                              </a>
                            </div>
                            <div className="update-cart col">
                              <div className="actions">
                                <button
                                  type="submit"
                                  className="button"
                                  name="update_cart"
                                  value="Update cart"
                                  disabled=""
                                >
                                  Update cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            id="woocommerce-cart-nonce"
                            name="woocommerce-cart-nonce"
                            value="065062f2b5"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/cart/"
                          />
                        </div>
                        <div className="col-12 col-md-5 col-xxl-4 ms-md-auto col-right">
                          <div className="cart-collaterals">
                            <div className="cart_totals calculated_shipping">
                              <h2>Cart totals</h2>

                              <table
                                cellspacing="0"
                                className="shop_table shop_table_responsive"
                              >
                                <tbody>
                                  <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol"></span>
                                          {totalSubtotal.toFixed(2)}
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>

                                  <tr className="woocommerce-shipping-totals shipping">
                                    <th>Shipping</th>
                                    <td data-title="Shipping">
                                      <ul
                                        id="shipping_method"
                                        className="woocommerce-shipping-methods"
                                      >
                                        <li>
                                          <input
                                            type="hidden"
                                            name="shipping_method[0]"
                                            data-index="0"
                                            id="shipping_method_0_flat_rate2"
                                            value="flat_rate:2"
                                            className="shipping_method"
                                          />
                                          <label for="shipping_method_0_flat_rate2">
                                            Flat rate:
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span className="woocommerce-Price-currencySymbol">
                                                  $
                                                </span>
                                                12.00
                                              </bdi>
                                            </span>
                                          </label>
                                        </li>
                                      </ul>
                                      <p className="woocommerce-shipping-destination">
                                        Shipping to
                                        <strong>
                                          47 W 13th St, New York, NY 10011, USA,
                                          47 W 13th St, New York, NY 10011, USA,
                                          New York, NY 10011
                                        </strong>
                                        .
                                      </p>

                                      <a className="shipping-calculator-button">
                                        Change address
                                      </a>
                                      <section className="shipping-calculator-form">
                                        <p
                                          className="form-row form-row-wide"
                                          id="calc_shipping_country_field"
                                        >
                                          <label
                                            for="calc_shipping_country"
                                            className="screen-reader-text"
                                          >
                                            Country / region:
                                          </label>
                                          <select
                                            name="calc_shipping_country"
                                            id="calc_shipping_country"
                                            className="country_to_state country_select"
                                            rel="calc_shipping_state"
                                          >
                                            <option value="default">
                                              Select a country / region…
                                            </option>
                                            <option
                                              value="US"
                                              selected="selected"
                                            >
                                              United States (US)
                                            </option>
                                          </select>
                                        </p>
                                        <p
                                          className="form-row form-row-wide"
                                          id="calc_shipping_state_field"
                                        >
                                          <span>
                                            <label
                                              for="calc_shipping_state"
                                              className="screen-reader-text"
                                            >
                                              State / County:
                                            </label>
                                            <select
                                              name="calc_shipping_state"
                                              className="state_select"
                                              id="calc_shipping_state"
                                              data-placeholder="State / County"
                                            >
                                              <option value="">
                                                Select an option…
                                              </option>
                                              <option value="AL">
                                                Alabama
                                              </option>
                                              <option value="AK">Alaska</option>
                                              <option value="AZ">
                                                Arizona
                                              </option>
                                              <option value="AR">
                                                Arkansas
                                              </option>
                                              <option value="CA">
                                                California
                                              </option>
                                              <option value="CO">
                                                Colorado
                                              </option>
                                              <option value="CT">
                                                Connecticut
                                              </option>
                                              <option value="DE">
                                                Delaware
                                              </option>
                                              <option value="DC">
                                                District Of Columbia
                                              </option>
                                              <option value="FL">
                                                Florida
                                              </option>
                                              <option value="GA">
                                                Georgia
                                              </option>
                                              <option value="HI">Hawaii</option>
                                              <option value="ID">Idaho</option>
                                              <option value="IL">
                                                Illinois
                                              </option>
                                              <option value="IN">
                                                Indiana
                                              </option>
                                              <option value="IA">Iowa</option>
                                              <option value="KS">Kansas</option>
                                              <option value="KY">
                                                Kentucky
                                              </option>
                                              <option value="LA">
                                                Louisiana
                                              </option>
                                              <option value="ME">Maine</option>
                                              <option value="MD">
                                                Maryland
                                              </option>
                                              <option value="MA">
                                                Massachusetts
                                              </option>
                                              <option value="MI">
                                                Michigan
                                              </option>
                                              <option value="MN">
                                                Minnesota
                                              </option>
                                              <option value="MS">
                                                Mississippi
                                              </option>
                                              <option value="MO">
                                                Missouri
                                              </option>
                                              <option value="MT">
                                                Montana
                                              </option>
                                              <option value="NE">
                                                Nebraska
                                              </option>
                                              <option value="NV">Nevada</option>
                                              <option value="NH">
                                                New Hampshire
                                              </option>
                                              <option value="NJ">
                                                New Jersey
                                              </option>
                                              <option value="NM">
                                                New Mexico
                                              </option>
                                              <option
                                                value="NY"
                                                selected="selected"
                                              >
                                                New York
                                              </option>
                                              <option value="NC">
                                                North Carolina
                                              </option>
                                              <option value="ND">
                                                North Dakota
                                              </option>
                                              <option value="OH">Ohio</option>
                                              <option value="OK">
                                                Oklahoma
                                              </option>
                                              <option value="OR">Oregon</option>
                                              <option value="PA">
                                                Pennsylvania
                                              </option>
                                              <option value="RI">
                                                Rhode Island
                                              </option>
                                              <option value="SC">
                                                South Carolina
                                              </option>
                                              <option value="SD">
                                                South Dakota
                                              </option>
                                              <option value="TN">
                                                Tennessee
                                              </option>
                                              <option value="TX">Texas</option>
                                              <option value="UT">Utah</option>
                                              <option value="VT">
                                                Vermont
                                              </option>
                                              <option value="VA">
                                                Virginia
                                              </option>
                                              <option value="WA">
                                                Washington
                                              </option>
                                              <option value="WV">
                                                West Virginia
                                              </option>
                                              <option value="WI">
                                                Wisconsin
                                              </option>
                                              <option value="WY">
                                                Wyoming
                                              </option>
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
                                          className="form-row form-row-wide"
                                          id="calc_shipping_city_field"
                                        >
                                          <label
                                            for="calc_shipping_city"
                                            className="screen-reader-text"
                                          >
                                            City:
                                          </label>
                                          <input
                                            type="text"
                                            className="input-text"
                                            value="New York"
                                            placeholder="City"
                                            name="calc_shipping_city"
                                            id="calc_shipping_city"
                                          />
                                        </p>
                                        <p
                                          className="form-row form-row-wide"
                                          id="calc_shipping_postcode_field"
                                        >
                                          <label
                                            for="calc_shipping_postcode"
                                            className="screen-reader-text"
                                          >
                                            Postcode / ZIP:
                                          </label>
                                          <input
                                            type="text"
                                            className="input-text"
                                            value="10011"
                                            placeholder="Postcode / ZIP"
                                            name="calc_shipping_postcode"
                                            id="calc_shipping_postcode"
                                          />
                                        </p>
                                        <p>
                                          <button
                                            type="submit"
                                            name="calc_shipping"
                                            value="1"
                                            className="button"
                                          >
                                            Update
                                          </button>
                                        </p>
                                        <input
                                          type="hidden"
                                          id="woocommerce-shipping-calculator-nonce"
                                          name="woocommerce-shipping-calculator-nonce"
                                          value="58af7fc867"
                                        />
                                        <input
                                          type="hidden"
                                          name="_wp_http_referer"
                                          value="/cart/"
                                        />
                                      </section>
                                    </td>
                                  </tr>

                                  <tr className="tax-rate tax-rate-us-tax-1">
                                    <th>Tax</th>
                                    <td data-title="Tax">
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        3.96
                                      </span>
                                    </td>
                                  </tr>

                                  <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total">
                                      <strong>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            {totalSubtotal + 12 + 3}
                                          </bdi>
                                        </span>
                                      </strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <div className="wc-proceed-to-checkout">
                                <button
                                  onClick={handleShipping}
                                  className="checkout-button button alt wc-forward"
                                >
                                  Proceed to checkout
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
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
