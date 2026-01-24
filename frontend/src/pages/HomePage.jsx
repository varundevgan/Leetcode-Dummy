import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => toast.success("here is success toast")}
      >
        Click me
      </button>
    </div>
  );
};

export default HomePage;
