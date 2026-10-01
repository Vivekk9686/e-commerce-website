function Home() {
  return (
    <>
      {/* Hero Section */}

      <section className="bg-light py-5">
        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            Welcome to Flipkart
          </h1>

          <p className="lead">
            India's favorite online shopping destination
          </p>

          <a
            href="/products"
            className="btn btn-primary btn-lg"
          >
            Shop Now
          </a>

        </div>
      </section>


      {/* Categories */}

      <section className="py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Shop by Category
          </h2>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card text-center h-100">

                <div className="card-body">

                  <div className="display-4">
                    📱
                  </div>

                  <h5 className="mt-3">
                    Mobiles
                  </h5>

                </div>

              </div>
            </div>


            <div className="col-md-3">
              <div className="card text-center h-100">

                <div className="card-body">

                  <div className="display-4">
                    💻
                  </div>

                  <h5 className="mt-3">
                    Electronics
                  </h5>

                </div>

              </div>
            </div>


            <div className="col-md-3">
              <div className="card text-center h-100">

                <div className="card-body">

                  <div className="display-4">
                    👕
                  </div>

                  <h5 className="mt-3">
                    Fashion
                  </h5>

                </div>

              </div>
            </div>


            <div className="col-md-3">
              <div className="card text-center h-100">

                <div className="card-body">

                  <div className="display-4">
                    🏠
                  </div>

                  <h5 className="mt-3">
                    Home
                  </h5>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
