import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import HomePage from "./components/HomePage";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const data = localStorage.getItem("userData");

    if (data) {
      setUser(JSON.parse(data));
    } else {
      enqueueSnackbar("You are not logged in yet! Please log in first.");
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
    enqueueSnackbar("User Logged-out successfully", { variant: "success" });
    navigate("/login");
  };

  return (
    <main>
      <div className="flex flex-raw justify-between m-5">
        <h1> Welcome {user?.name}</h1>
        <button onClick={logout}>Log-Out</button>
      </div>
      <HomePage />
    </main>
  );
}

export default App;
