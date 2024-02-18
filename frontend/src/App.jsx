import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import HomePage from "./components/HomePage";

function App() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const data = localStorage.getItem("userData");
  let userInfo = JSON.parse(data);

  const logout = () => {
    localStorage.removeItem("userData");
    enqueueSnackbar("User Logged-out successfully", { variant: "success" });
    navigate("/login");
  };

  return (
    <main>
      {userInfo ? (
        <>
          <div className="flex flex-raw justify-between m-5">
            <h1> Welcome {userInfo.name}</h1>
            <button onClick={logout}>Log-Out</button>
          </div>
          <HomePage />
        </>
      ) : (
        <>
          <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 gap-6">
            <h1 className="text-3xl font-bold"> You are not logged in</h1>
            <Link className="text-3xl font-bold" to="/login">
              {" "}
              Go to Log-In
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
