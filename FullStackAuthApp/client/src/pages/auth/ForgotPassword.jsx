import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AuthLayout from "../../components/layouts/AuthLayout";

function ForgotPassword() {
  return (
    <AuthLayout>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Reset Password
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          We’ll send you a reset link
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
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 rounded-2xl font-semibold"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center mt-6">

          <Link
            to="/"
            className="text-gray-400 hover:text-white"
          >
            Back to Login
          </Link>

        </p>

      </motion.div>

    </AuthLayout>
  );
}

export default ForgotPassword;