import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

import AuthLayout from "../../components/layouts/AuthLayout";

function Register() {
  return (
    <AuthLayout>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Join us today
        </p>

        <form className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-2 bg-white/5 border border-gray-700 focus:border-blue-500 outline-none p-4 rounded-2xl text-white"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 rounded-2xl font-semibold"
          >
            Send OTP
          </button>

          <div>
            <label className="text-gray-300 text-sm">
              OTP
            </label>

            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mt-2 bg-white/5 border border-gray-700 focus:border-blue-500 outline-none p-4 rounded-2xl text-white"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-2 bg-white/5 border border-gray-700 focus:border-blue-500 outline-none p-4 rounded-2xl text-white"
            />
          </div>

          <button
            className="w-full bg-green-600 hover:bg-green-700 transition-all text-white py-4 rounded-2xl font-semibold"
          >
            Register
          </button>

          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-700 w-full"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="h-px bg-gray-700 w-full"></div>
          </div>

          <button
            type="button"
            className="w-full bg-white hover:bg-gray-100 transition-all py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"
          >
            <FcGoogle size={25} />
            Continue with Google
          </button>

        </form>

        <p className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?{" "}

          <Link
            to="/"
            className="text-white"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </AuthLayout>
  );
}

export default Register;