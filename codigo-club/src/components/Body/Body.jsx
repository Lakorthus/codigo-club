import React from "react";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function Body({ children, className }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`body  bg-[#19647e] min-h-[100vh] ${className}`}>
      {loading ? (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
          <HashLoader color={"#fff"} loading={loading} size={120} />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default Body;
