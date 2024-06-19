export default function ShopByCategory(){
    return(
        <>
            <section className="py-space shop-category">
    <div className="container">
      <div className="heading-wrap mb-4 mb-lg-5">
        <h3 className="display-4 fw-medium mb-3 text-center text-secondary title">
          Shop by Category
        </h3>
      </div>
      <div className="g-4 row">
        <div className="col-lg-6">
          <div className="align-items-center bg-whitesmoke border-0 card d-flex h-100 justify-content-center overflow-hidden position-relative px-2 px-sm-4 py-space-mini rounded-4">
            <div className="align-items-center g-0 position-relative row">
              <div className="col-md-5 mb-2 mb-md-0 mt-3 mt-md-0 text-center">
                <img src="images/jaggery.png" alt="jaggery" />
              </div>
              <div className="col-md-7">
                <div className="card-body text-center text-md-start">
                  <h5 className="card-title fs-1 fw-medium font-cocogoose text-secondary">Jaggery</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="card-btn">
                    <a href="/product-category/jaggery" className="btn btn-primary fs-6">Shop Jaggery</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="align-items-center bg-whitesmoke border-0 card d-flex h-100 justify-content-center overflow-hidden position-relative px-2 px-sm-4 py-space-mini rounded-4">
            <div className="align-items-center g-0 position-relative row">
              <div className="col-md-5 mb-2 mb-md-0 mt-3 mt-md-0 text-center">
                <img src="images/edible-oil.png" alt="edible-oil" />
              </div>
              <div className="col-md-7">
                <div className="card-body text-center text-md-start">
                  <h5 className="card-title fs-1 fw-medium font-cocogoose text-secondary">Edible Oils</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="card-btn">
                    <a href="/product-category/edible-oil" className="btn btn-primary fs-6">Shop Oils</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="align-items-center bg-whitesmoke border-0 card d-flex h-100 justify-content-center overflow-hidden position-relative px-2 px-sm-4 py-space-mini rounded-4">
            <div className="align-items-center g-0 position-relative row">
              <div className="col-md-5 mb-2 mb-md-0 mt-3 mt-md-0 text-center">
                <img src="images/spices.png" alt="spices" />
              </div>
              <div className="col-md-7">
                <div className="card-body text-center text-md-start">
                  <h5 className="card-title fs-1 fw-medium font-cocogoose text-secondary">Spices</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="card-btn">
                    <a href="/product-category/spices" className="btn btn-primary fs-6">Shop Spices</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="align-items-center bg-whitesmoke border-0 card d-flex h-100 justify-content-center overflow-hidden position-relative px-2 px-sm-4 py-space-mini rounded-4">
            <div className="align-items-center g-0 position-relative row">
              <div className="col-md-5 mb-2 mb-md-0 mt-3 mt-md-0 text-center">
                <img src="/images/beans.png" alt="beans" />
              </div>
              <div className="col-md-7">
                <div className="card-body text-center text-md-start">
                  <h5 className="card-title fs-1 fw-medium font-cocogoose text-secondary">Beans</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="card-btn">
                    <a href="/product-category/beans" className="btn btn-primary fs-6">Shop beans</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}