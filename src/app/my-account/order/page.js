'use client'
import { useState, useEffect  } from "react";
import { fetchOrders } from "@/utils/woocommerce";
import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Page() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const getOrders = async () => {
        const data = await fetchOrders();
        setOrders(data);
      };
      getOrders();
    }, []);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
      };
  return (
    <>
      <Header />
      <BannerInner name="Order" />
      <main>
        <section class="my-account-details">
          <div class="container">
            <div class="entry-content">
              <div class="woocommerce">
                <NavBar />
               
                <div class="woocommerce-MyAccount-content">
                  <div class="woocommerce-notices-wrapper"></div>

                  <table class="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                    <thead>
                      <tr>
                        <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                          <span class="nobr">Order</span>
                        </th>
                        <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                          <span class="nobr">Date</span>
                        </th>
                        <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status">
                          <span class="nobr">Status</span>
                        </th>
                        <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total">
                          <span class="nobr">Total</span>
                        </th>
                        <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">
                          <span class="nobr">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    {orders.map((order) => (
                    <tbody>
                      <tr class="woocommerce-orders-table__row woocommerce-orders-table__row--status-processing order">
                        <td
                          class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                          data-title="Order"
                        >
                          <a href="https://www.omofreshfood.com/my-account/view-order/247/">
                          {order.id}
                          </a>
                        </td>
                        <td
                          class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date"
                          data-title="Date"
                        >
                          <time datetime="2024-06-18T09:39:31+00:00">
                          {formatDate(order.date_created)}
                          </time>
                        </td>
                        <td
                          class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status"
                          data-title="Status"
                        >
                        {order.status}
                        </td>
                        <td
                          class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total"
                          data-title="Total"
                        >
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              &#036;
                            </span>
                            {order.total}
                          </span>{" "}
                          for {order.items}
                        </td>
                        <td
                          class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions"
                          data-title="Actions"
                        >
                          <Link
                            href={`order/${order.id}`}
                            class="woocommerce-button button view"
                          >
                            View
                          </Link>{" "}
                        </td>
                      </tr>
                    
                    </tbody>
                    ))}
                  </table>
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
