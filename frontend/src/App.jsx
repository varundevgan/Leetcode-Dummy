import { useState } from "react";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton mode="modal">
          <button>Logout</button>
        </SignOutButton>
      </SignedIn>
    </>
  );
}

export default App;
