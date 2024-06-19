'use client'
import BannerInner from "@/components/BannerInner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Page() {
    const[firstname,setFirstName] = useState('');
    const[lastname,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[currentpassword,setCurrentPassword] = useState('');
    const[newpassword,setNewPassword] = useState('');


  return (
    <>
      <Header />
      <BannerInner name="Account Details" />
      <section className="my-account-details">
        <div className="container">
          <div className="entry-content">
            <div className="woocommerce">
              <NavBar />
              <div className="woocommerce-MyAccount-content">
                <div className="woocommerce-notices-wrapper"></div>
                <form
                  className="woocommerce-EditAccountForm edit-account"
                  action=""
                  method="post"
                >
                  <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                    <label for="account_first_name">
                      First name&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="woocommerce-Input woocommerce-Input--text input-text"
                      name="account_first_name"
                      id="account_first_name"
                      autocomplete="given-name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </p>
                  <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                    <label for="account_last_name">
                      Last name&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="woocommerce-Input woocommerce-Input--text input-text"
                      name="account_last_name"
                      id="account_last_name"
                      autocomplete="family-name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </p>
                  <div className="clear"></div>

                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="account_display_name">
                      Display name&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="woocommerce-Input woocommerce-Input--text input-text"
                      name="account_display_name"
                      id="account_display_name"
                      value="admin"
                    />{" "}
                    <span>
                      <em>
                        This will be how your name will be displayed in the
                        account section and in reviews
                      </em>
                    </span>
                  </p>
                  <div className="clear"></div>

                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label for="account_email">
                      Email address&nbsp;<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="woocommerce-Input woocommerce-Input--email input-text"
                      name="account_email"
                      id="account_email"
                      autocomplete="email"
                      value="icecube.wordpress@gmail.com"
                    />
                  </p>

                  <fieldset>
                    <legend>Password change</legend>

                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="password_current">
                        Current password (leave blank to leave unchanged)
                      </label>
                      <input
                        type="password"
                        className="woocommerce-Input woocommerce-Input--password input-text"
                        name="password_current"
                        id="password_current"
                        autocomplete="off"
                        value={currentpassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="password_1">
                        New password (leave blank to leave unchanged)
                      </label>
                      <input
                        type="password"
                        className="woocommerce-Input woocommerce-Input--password input-text"
                        name="password_1"
                        id="password_1"
                        autocomplete="off"
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label for="password_2">Confirm new password</label>
                      <input
                        type="password"
                        className="woocommerce-Input woocommerce-Input--password input-text"
                        name="password_2"
                        id="password_2"
                        autocomplete="off"
                      />
                    </p>
                  </fieldset>
                  <div className="clear"></div>

                  <p>
                    <input
                      type="hidden"
                      id="save-account-details-nonce"
                      name="save-account-details-nonce"
                      value="8e0a6e41c7"
                    />
                    <input
                      type="hidden"
                      name="_wp_http_referer"
                      value="/my-account/edit-account/"
                    />{" "}
                    <button
                      type="submit"
                      className="woocommerce-Button button"
                      name="save_account_details"
                      value="Save changes"
                    >
                      Save changes
                    </button>   
                    <input
                      type="hidden"
                      name="action"
                      value="save_account_details"
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
