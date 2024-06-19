import Link from "next/link";

export default function NavBar(){
    return(
        <>
         <nav className="woocommerce-MyAccount-navigation">
                  <ul>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard">
                      <Link href="/my-account">
                        Dashboard
                      </Link>
                    </li>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                      <Link href="/my-account/order/">
                        Orders
                      </Link>
                    </li>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads is-active">
                      <Link href="/my-account/downloads/">
                        Downloads
                      </Link>
                    </li>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                      <Link href="/my-account/edit-address">
                        Addresses
                      </Link>
                    </li>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                      <Link href="/my-account/edit-account/">
                        Account details
                      </Link>
                    </li>
                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                      <Link href='/logout'>
                        Log out
                      </Link>
                    </li>
                  </ul>
                </nav>
        </>
    )
}