import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "../components/LogInForm";

const Login = () => {
  return (
    <main>
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 gap-6 bg-gray-900">
        <h1 className="text-3xl font-bold text-white">Log In</h1>
        <LogInForm />
        <Link className="text-white" to="/sign-up">
          Don't have an account? Create one here.
        </Link>
      </div>
    </main>
  );
};

export default Login;
