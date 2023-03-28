import React, { useState } from "react";

const Profile = () => {
  const [count,setCount] = useState(0);
  

  return (
    <>
      <h1>Profile Functional Component.</h1>
      <h2>{count}</h2>
      <button type="submit" onClick={()=>{setCount(count+1)}}>count</button>
      
    </>
  );
};
export default Profile;
