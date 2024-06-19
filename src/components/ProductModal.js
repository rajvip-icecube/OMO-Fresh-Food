import React from 'react';
import Modal from 'react-modal';

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden scroll'
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div id="woosq-popup" className="woosq-popup mfp-with-anim">
        <div className="woocommerce single-product woosq-product">
          <div className="product">
            <div className="thumbnails">
              <div className="images">
                <div className="thumbnail">
                  <img
                    src={product.images[0].src}
                    alt={product.name}
                    className="attachment-full size-full"
                  />
                </div>
              </div>
            </div>
            <div className="summary entry-summary">
              <div className="summary-content ps-container ps-theme-wpc ps-active-y">
                <h1 className="product_title entry-title">{product.name}</h1>
                <div className="price-wrapper d-flex flex-wrap my-4 mb-3 py-2">
                  <h3 className="fs-4 m-0 pe-4 title">Price:</h3>
                  <p className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">$</span>
                        {product.price}
                      </bdi>
                    </span>
                  </p>
                </div>
                <div className="woocommerce-product-details__short-description">
                  <p>{product.description}</p>
                </div>
                <form className="cart" action={`/product/${product.id}/`} method="post" enctype="multipart/form-data">
                  <div className="price-wrapper quantity-wrapper">
                    <h3 className="fs-4 m-0 pe-4 title">Quantity:</h3>
                    <div className="quantity">
                      <input type="button" value="-" className="qty_button minus" />
                      <input type="number" className="input-text qty text" name="quantity" value="1" size="4" min="1" step="1" />
                      <input type="button" value="+" className="qty_button plus" />
                    </div>
                  </div>
                  <button type="submit" name="add-to-cart" value={product.id} className="single_add_to_cart_button button alt">Add to cart</button>
                </form>
                <div className="product_meta">
                  <span className="posted_in">Category: <a href={`/product-category/${product.category}/`} rel="tag">{product.category}</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button title="Close (Esc)" type="button" className="mfp-close" onClick={onRequestClose}>×</button>
      </div>
    </Modal>
  );
};

export default ProductModal;
