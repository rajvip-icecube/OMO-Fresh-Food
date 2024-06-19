'use client'
import React, { useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PriceFilterContext } from '@/context/PriceFilterContext';

export default function SideBar() {
  const { price, setPrice } = useContext(PriceFilterContext);
  const handleSliderChange = (newValue) => {
    setPrice(newValue);
  };
  return (
    <>
      <div className="col-lg-4 col-xl-3 mb-4 mb-md-0">
        <div className="product-filter d-flex flex-column flex-wrap gap-4 pe-lg-3">
          <div className="bg-whitesmoke category-filter-wrap p-4 position-relative overflow-hidden">
            <h3 className="font-cocogoose mb-5 pb-lg-2 position-relative text-center text-secondary title z-3">
              Category
            </h3>
            <ul className="p-0 position-relative z-3">
              <a href="/product-category/jaggery">Jaggery</a>
              <br />
              <a href="/product-category/edible-oil">Edible Oils</a>
              <br />
              <a href="/product-category/spices">Spices</a>
              <br />
              <a href="/product-category/beans">Beans</a>
              <br />
            </ul>
          </div>

          <div className="product-filter-wrap bg-whitesmoke p-4 position-relative overflow-hidden">
            <h3 className="font-cocogoose mb-5 pb-lg-2 position-relative text-center text-secondary title z-3">
              Products
            </h3>
            <ul className="p-0 position-relative z-3">
              <a>Jaggery Powder (Copy)</a>
              <br />
              <a>Jaggery Chocolate (Copy)</a>
              <br />
              <a>Jaggery Balls (Copy)</a>
              <br />
              <a>Jaggery Chocolate</a>
              <br />
              <a>Jaggery Chocomilk</a>
              <br />
            </ul>
          </div>

          <div className="price-filter-wrap bg-whitesmoke p-4 position-relative overflow-hidden">
            <h3 className="font-cocogoose mb-5 pb-lg-2 position-relative text-center text-secondary title z-3">
              Price
            </h3>
            <ul className="p-0 position-relative z-3">
              <div
                className="berocket_single_filter_widget berocket_single_filter_widget_199"
                data-id="199"
              >
                <div
                  className="bapf_sfilter bapf_slidr bapf_slidr_ion"
                  data-op="slidr"
                  data-taxonomy="price"
                  data-name="Price"
                  id="bapf_1"
                >
                  <div className="bapf_head">
                    <h3>Price</h3>
                  </div>
                  <div className="bapf_body">
                    <div className="bapf_slidr_all">
                      <Slider
                        min={10}
                        max={12}
                        value={price}
                        onChange={handleSliderChange}
                        step={1}
                        railStyle={{ backgroundColor: '#ccc', height: 6 }}
                        handleStyle={{
                          height: 28,
                          width: 28,
                          marginTop: -11,
                          backgroundColor: '#999',
                          border: 'none'
                        }}
                        trackStyle={{ backgroundColor: '#ccc', height: 6 }}
                        dotStyle={{ display: 'none' }}
                      />
                      <div className="d-flex justify-content-between mt-3">
                        <span>$10.00</span>
                        {price !== 10 && price !== 12 && <span>${price}.00</span>}
                        {price !== 11 && <span>$12.00</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
