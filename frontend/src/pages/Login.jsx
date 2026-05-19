function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;