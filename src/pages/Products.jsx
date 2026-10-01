import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchProducts = async () => {

        try {

            const response = await fetch(
                "http://localhost:8081/api/product"
            );


            const data = await response.json();


            if (!response.ok) {

                setError(
                    data.message || "Failed to fetch products"
                );

                return;
            }


            setProducts(data.products);

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

        fetchProducts();

    }, []);


    if (loading) {

        return (
            <div className="container py-5">

                <div className="text-center">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                    </div>

                    <p className="mt-3">
                        Loading products...
                    </p>

                </div>

            </div>
        );

    }


    if (error) {

        return (
            <div className="container py-5">

                <div className="alert alert-danger">
                    {error}
                </div>

            </div>
        );

    }


    return (

        <div className="container py-5">

            <h1 className="text-center mb-5">
                All Products
            </h1>


            {products.length === 0 ? (

                <div className="alert alert-info text-center">
                    No products available
                </div>

            ) : (

                <div className="row g-4">

                    {products.map((product) => (

                        <div
                            className="col-sm-6 col-lg-3"
                            key={product._id}
                        >

                            <ProductCard
                                product={product}
                            />

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}


export default Products;
