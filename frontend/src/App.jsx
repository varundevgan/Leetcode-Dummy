import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </>
  );
}

export default App;
