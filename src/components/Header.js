"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Header() {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = useSelector((state) => state.cart.cartCount);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  const toggleSearchBox = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };
  return (
    <>
      <header>
        <div className="bg-secondary header-top py-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-freeshiping">
                  <ul className="d-flex flex-wrap gap-2 gap-md-4 justify-content-center justify-content-md-end list-unstyled p-0 text-center">
                    <li>
                      <a className="text-white">
                        <img
                          src="/images/shiping-icon.png"
                          alt="shiping-icon"
                          className="me-3"
                        />
                        Free shipping for orders over $100
                      </a>
                    </li>
                    <li>
                      <a className="text-white">
                        <img
                          src="/images/call-icon.png"
                          alt="call-icon"
                          className="me-3"
                        />
                        Call Us 987 654 3210
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <nav className="justify-content-lg-between justify-content-start navbar navbar-expand-lg p-0">
              <Link
                className="navbar-brand p-0 position-relative text-center z-3"
                href='/'
              >
                <img src="/images/logo.png" alt="logo" />
              </Link>
              <button
                className="bg-white navbar-toggler order-3 px-1 py-0 rounded-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navbar-collapse position-absolute text-center text-lg-start w-100"
                id="navbarSupportedContent"
              >
                <ul className="gap-2 gap-xl-4 gap-xxl-5 mb-2 mb-lg-0 mx-auto navbar-nav p-lg-0 pb-3 pt-3">
                  <li className="list-unstyled nav-item position-relative">
                    <Link
                      href='/'
                      className="nav-link py-1 active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-unstyled nav-item position-relative">
                    <Link href='/products' className="nav-link py-1">
                      Products
                    </Link>
                  </li>
                  <li className="list-unstyled nav-item position-relative">
                    <Link className="nav-link py-1" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="list-unstyled nav-item position-relative">
                    <Link href="/blog" className="nav-link py-1">
                      Blog
                    </Link>
                  </li>
                  <li className="list-unstyled nav-item position-relative">
                    <Link href="/contact" className="nav-link py-1">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="align-items-center d-flex header-right me-4 me-lg-0 ms-auto">
                <div className="header-search pointer-eventr position-relative">
                  <button
                    className="round-btn"
                    id="show-search-box"
                    onClick={toggleSearchBox}
                  >
                    <a>
                      <img src="/images/search-icon.png" alt="search-icon" />
                    </a>
                  </button>
                  {isSearchBoxVisible && (
                    <form
                      className="bg-primary float-end  navbar-form position-absolute z-3"
                      role="search"
                      onSubmit={handleSearchSubmit}
                    >
                      <div className="position-absolute traingle"></div>
                      <div className="add-on input-group">
                        <input
                          className="addon-text-box bg-transparent border-0 box-shadow form-control rounded-0"
                          placeholder="Search"
                          name="s"
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="addon-btn input-group-btn"
                        >
                          <img
                            src="/images/search-icon-w.png"
                            alt="search-icon-w"
                          />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                <button className="header-customer mx-4 pointer-eventr position-relative">
                  <Link href='/my-account'>
                    <img src="/images/user-icon.png" alt="user-icon" />
                  </Link>
                </button>
                <div className="header-minicart position-relative">
                  <Link
                    className="align-items-center bg-primary d-flex rounded text-white"
                    href='/add-to-cart'
                  >
                    <div className="align-items-center bg-primary d-flex rounded text-white">
                      <img src="/images/cart-icon.png" alt="cart-icon" />
                      <span className="cart_text_wrapp fw-bolder px-2 text-uppercase">
                        <span className="cart_label">Cart </span>

                        <button
                          id="CartCount"
                          className="bg-white items-count position-absolute text-black text-center"
                        >
                          {cartCount}
                        </button>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
