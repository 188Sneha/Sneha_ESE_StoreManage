import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "https://ai-complaint-backend-9088.onrender.com/api/auth/login",
                formData
            );

            // SAVE JWT TOKEN
            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Login Successful");

            // REDIRECT TO HOME PAGE
            navigate("/");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">

            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

                <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
                    Login
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;