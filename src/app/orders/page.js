'use client';
import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  if (!orderData) {
    return <p>No order found.</p>;
  }

  return (
   <>
   <Header />
   <BannerInner name='Order received'/>
   <main id="primary" className="site-main">
      <section className="checkout-details">
        <div className="container">
          <div className="entry-content">
            <div className="woocommerce">
              <div className="woocommerce-order">
                <p className="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">
                  Thank you. Your order has been received.
                </p>

                <ul className="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
                  <li className="woocommerce-order-overview__order order">
                    Order number: <strong>247</strong>
                  </li>

                  <li className="woocommerce-order-overview__date date">
                    Date: <strong>June 18, 2024</strong>
                  </li>

                  <li className="woocommerce-order-overview__email email">
                    Email: <strong>test@gmail.com</strong>
                  </li>

                  <li className="woocommerce-order-overview__total total">
                    Total:
                    <strong>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          {orderData.total}
                        </bdi>
                      </span>
                    </strong>
                  </li>

                  <li className="woocommerce-order-overview__payment-method method">
                    Payment method: <strong>Cash on delivery</strong>
                  </li>
                </ul>

                <p>Pay with cash upon delivery.</p>
                <section className="woocommerce-order-details">
                  <h2 className="woocommerce-order-details__title">
                    Order details
                  </h2>

                  <table className="woocommerce-table woocommerce-table--order-details shop_table order_details">
                    <thead>
                      <tr>
                        <th className="woocommerce-table__product-name product-name">
                          Product
                        </th>
                        <th className="woocommerce-table__product-table product-total">
                          Total
                        </th>
                      </tr>
                    </thead>
                    {orderData.line_items.map((item) => (
                    <tbody key={index}>
                      <tr className="woocommerce-table__line-item order_item">
                        <td className="woocommerce-table__product-name product-name">
                          <Link href={`/products/${item.id}`}>
                          {item.name} 
                          </Link>
                          <strong className="product-quantity">
                            &times;&nbsp;{item.quantity}
                          </strong>
                        </td>

                        <td className="woocommerce-table__product-total product-total">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              {item.total}
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
    ))}
                    <tfoot>
                      <tr>
                        <th scope="row">Subtotal:</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            {orderData.total}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shipping:</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            12.00
                          </span>
                          &nbsp;<small className="shipped_via">via Flat rate</small>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Tax:</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            5.76
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Payment method:</th>
                        <td>Cash on delivery</td>
                      </tr>
                      <tr>
                        <th scope="row">Total:</th>
                        <td>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            {orderData.total}
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </section>

                <section className="woocommerce-customer-details">
                  <section className="woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses">
                    <div className="woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1">
                      <h2 className="woocommerce-column__title">Billing address</h2>

                      <address>
                        test est
                        <br />
                        test@gmail.com
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        New York, NY 10011
                        <p className="woocommerce-customer-details--phone">
                          1234567890
                        </p>
                        <p className="woocommerce-customer-details--email">
                          test@gmail.com
                        </p>
                      </address>
                    </div>

                    <div className="woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2">
                      <h2 className="woocommerce-column__title">
                        Shipping address
                      </h2>
                      <address>
                        test est
                        <br />
                        test@gmail.com
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        New York, NY 10011
                      </address>
                    </div>
                  </section>
                </section>
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
