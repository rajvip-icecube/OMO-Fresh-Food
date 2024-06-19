export default function BannerInner({
  name,
  isProductCategory,
  productcategoryname,
  searchname,
  isSearch
}) {
  return (
    <>
      <section
        className="banner-inner py-space position-relative"
        style={{
          backgroundImage:
            "url(https://www.omofreshfood.com/wp-content/uploads/2024/05/category-banner-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="banner-content">
                <h1 className="fs-1 fw-medium mb-3 text-white">
                  
                  {isProductCategory? productcategoryname :name}
                </h1>
                <div className="custom-breadcrumb">
                  <ul className="align-content-center d-flex flex-wrap gap-3 list-unstyled p-0">
                    <li>
                      <a className="text-white" href="/">
                        Home
                      </a>
                    </li>
                    »<li>{name}</li>
                    {isSearch && <li>Search results: {searchname}</li>}
                    {isProductCategory && <><span>»</span><li>{productcategoryname}</li></>}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-end">
              <figure>
                <img src="" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
