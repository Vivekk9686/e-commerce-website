function Cart() {

  const cartItems = [
    {
      id: 1,
      name: "iPhone 15",
      price: 69999,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Sony Headphones",
      price: 9999,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    }
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        My Cart 🛒
      </h1>

      <div className="row">

        {/* Cart Items */}

        <div className="col-lg-8">

          {cartItems.map((item) => (

            <div
              className="card mb-3"
              key={item.id}
            >

              <div className="card-body">

                <div className="row align-items-center">

                  <div className="col-md-2">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />

                  </div>

                  <div className="col-md-4">

                    <h5>
                      {item.name}
                    </h5>

                    <p className="text-primary">
                      ₹{item.price}
                    </p>

                  </div>

                  <div className="col-md-3">

                    <div className="input-group">

                      <button className="btn btn-outline-secondary">
                        -
                      </button>

                      <input
                        type="text"
                        className="form-control text-center"
                        value={item.quantity}
                        readOnly
                      />

                      <button className="btn btn-outline-secondary">
                        +
                      </button>

                    </div>

                  </div>

                  <div className="col-md-3">

                    <button className="btn btn-danger">
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Cart Summary */}

        <div className="col-lg-4">

          <div className="card">

            <div className="card-body">

              <h4>
                Order Summary
              </h4>

              <hr />

              <div className="d-flex justify-content-between">

                <span>
                  Items
                </span>

                <span>
                  {cartItems.length}
                </span>

              </div>

              <div className="d-flex justify-content-between mt-2">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

              <button className="btn btn-success w-100 mt-4">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;
