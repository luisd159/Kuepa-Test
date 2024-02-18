import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "../components/LogInForm";

const Login = () => {
  return (
    <main>
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 gap-6">
        <h1 className="text-3xl font-bold">Log In</h1>
        <LogInForm />
        <Link to="/sign-up">Don't Have An User, Go to create one.</Link>
      </div>
    </main>
  );
};

export default Login;
