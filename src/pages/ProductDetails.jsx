import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function ProductDetails() {

    const { id } = useParams();


    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchProduct = async () => {

        try {

            const response = await fetch(
                `http://localhost:8081/api/product/${id}`
            );


            const data = await response.json();


            if (!response.ok) {

                setError(
                    data.message || "Product not found"
                );

                return;
            }


            setProduct(data.product);

        } catch (error) {

            console.log(error);

            setError(
                "Unable to connect to server"
            );

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchProduct();

    }, [id]);


    if (loading) {

        return (
            <div className="container py-5 text-center">

                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                </div>

                <p className="mt-3">
                    Loading product...
                </p>

            </div>
        );

    }


    if (error) {

        return (
            <div className="container py-5">

                <div className="alert alert-danger">
                    {error}
                </div>

                <Link
                    to="/products"
                    className="btn btn-primary"
                >
                    Back to Products
                </Link>

            </div>
        );

    }


    if (!product) {
        return null;
    }


    return (

        <div className="container py-5">

            <div className="row">


                {/* Product Image */}

                <div className="col-md-6 text-center">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                    />

                </div>


                {/* Product Details */}

                <div className="col-md-6">

                    <h1>
                        {product.name}
                    </h1>


                    <p className="text-muted">
                        Category: {product.category}
                    </p>


                    <hr />


                    <p className="lead">
                        {product.description}
                    </p>


                    <h2 className="text-primary mb-3">
                        ₹{product.price}
                    </h2>


                    <p>
                        <strong>
                            Stock:
                        </strong>{" "}
                        {product.stock}
                    </p>


                    <div className="d-flex gap-2 mt-4">

                        <button
                            className="btn btn-warning btn-lg"
                            disabled={product.stock === 0}
                        >
                            Add to Cart
                        </button>


                        <button
                            className="btn btn-primary btn-lg"
                            disabled={product.stock === 0}
                        >
                            Buy Now
                        </button>

                    </div>


                    <hr className="my-4" />


                    <Link
                        to="/products"
                        className="btn btn-outline-secondary"
                    >
                        ← Back to Products
                    </Link>

                </div>

            </div>

        </div>

    );
}


export default ProductDetails;
