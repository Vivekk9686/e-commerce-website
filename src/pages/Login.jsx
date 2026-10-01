import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;


        setFormData({
            ...formData,
            [name]: value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);


        try {

            const response = await fetch(
                "http://localhost:8081/api/user/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );


            const data = await response.json();


            if (!response.ok) {

                setError(data.message);

                return;
            }


            setMessage(data.message);


            // Save user information

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );


            // Go to home page

            setTimeout(() => {

                navigate("/");

            }, 1000);


        } catch (error) {

            console.log(error);

            setError(
                "Unable to connect to server"
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>


                            {/* Success */}

                            {message && (

                                <div className="alert alert-success">
                                    {message}
                                </div>

                            )}


                            {/* Error */}

                            {error && (

                                <div className="alert alert-danger">
                                    {error}
                                </div>

                            )}


                            <form onSubmit={handleSubmit}>


                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Password */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Login */}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >

                                    {loading
                                        ? "Logging in..."
                                        : "Login"
                                    }

                                </button>


                            </form>


                            <div className="text-center mt-3">

                                <span>
                                    Don't have an account?
                                </span>

                                {" "}

                                <Link to="/register">
                                    Register
                                </Link>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}


export default Login;
