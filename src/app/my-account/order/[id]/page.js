'use client'
import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";  
import { fetchOrderById } from "@/utils/woocommerce";
import { useState, useEffect} from "react";

export default function Page({ params }) {
    const { id } = params;
    console.log("ID", id);
    const[order, setOrder] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const productData = await fetchOrderById(id);
            setOrder(productData);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
    
        fetchData();
      }, [id]);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
      };
  return (
    <>
      <Header />
      <BannerInner name="Order" />
      {order ? (
      <section class="my-account-details">
        <div class="container">
          <div class="entry-content">
            <div class="woocommerce">
            <NavBar />
              <div class="woocommerce-MyAccount-content">
                <div class="woocommerce-notices-wrapper"></div>
                <p>
                  Order #<mark class="order-number">{order.id}</mark> was placed on
                  <mark class="order-date">{formatDate(order.date_created)}</mark> and is currently
                  <mark class="order-status">{order.status}</mark>.
                </p>

                <section class="woocommerce-order-details">
                  <h2 class="woocommerce-order-details__title">
                    Order details
                  </h2>

                  <table class="woocommerce-table woocommerce-table--order-details shop_table order_details">
                    <thead>
                      <tr>
                        <th class="woocommerce-table__product-name product-name">
                          Product
                        </th>
                        <th class="woocommerce-table__product-table product-total">
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="woocommerce-table__line-item order_item">
                        <td class="woocommerce-table__product-name product-name">
                          <a href="https://www.omofreshfood.com/product/jaggery-chocolate/">
                           {order.name}
                          </a>
                          <strong class="product-quantity">
                            &times;&nbsp;2
                          </strong>
                        </td>

                        <td class="woocommerce-table__product-total product-total">
                          <span class="woocommerce-Price-amount amount">
                            <bdi>
                              <span class="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              {order.total}
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>

                    <tfoot>
                      <tr>
                        <th scope="row">Subtotal:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                           {order.total}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Shipping:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            12.00
                          </span>
                          &nbsp;<small class="shipped_via">via Flat rate</small>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Tax:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            5.76
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Payment method:</th>
                        <td>Payed with card</td>
                      </tr>
                      <tr>
                        <th scope="row">Total:</th>
                        <td>
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                           {order.total}
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </section>

                <section class="woocommerce-customer-details">
                  <section class="woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses">
                    <div class="woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1">
                      <h2 class="woocommerce-column__title">Billing address</h2>

                      <address>
                      {order.billing.first_name}
                        <br />
                        test@gmail.com
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        47 W 13th St, New York, NY 10011, USA
                        <br />
                        New York, NY 10011
                        <p class="woocommerce-customer-details--phone">
                          1234567890
                        </p>
                        <p class="woocommerce-customer-details--email">
                          test@gmail.com
                        </p>
                      </address>
                    </div>

                    <div class="woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2">
                      <h2 class="woocommerce-column__title">
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
       ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
}
