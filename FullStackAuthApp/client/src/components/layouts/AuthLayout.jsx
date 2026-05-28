import AuthBackground from "../../common/AuthBackground";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#020617] px-4">

      <AuthBackground />

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;