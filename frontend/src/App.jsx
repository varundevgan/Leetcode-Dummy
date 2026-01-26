import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { ProblemPage } from "./pages/ProblemPage.jsx";
import { Problems } from "./pages/Problems.jsx";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // * to get rid of flickring effect i.e when user authenticated but goes to home page so is redirected to dashboard
  if (!isLoaded) return null;

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <Problems /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problem/:id"
          element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
