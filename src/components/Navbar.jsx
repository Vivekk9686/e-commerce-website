import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold"
        >
          Flipkart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link"
              >
                Cart 🛒
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link"
              >
                Register
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
