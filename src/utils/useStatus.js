import { useState, useEffect } from "react";

const useStatus=()=> {
  const [status, setStatus] = useState(true);
  // console.log("inside useStatus");

  useEffect(() => {
    const handleOffline=()=> {
      // console.log("inside handleOffline");

      setStatus(false);
    }
    const handleOnline=()=> {
      // console.log("inside handleOnline");
      setStatus(true);
    }

    // console.log("inside useEffect");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
}
export default useStatus;
