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

function App() {
  const { SignedIn } = useUser();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/problems"
          element={SignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
