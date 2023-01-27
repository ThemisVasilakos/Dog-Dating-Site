import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Main() {
  const [user, setUser] = useState(undefined);
  const namep = user?.email.split('.')[0].charAt(0).toUpperCase() + user?.email.split('.')[0].slice(1);
  const navigate = useNavigate();

  navigate("/*");
  // const defineCustomElements(window);

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) setUser(currentUser);
  //   else navigate("/login");
  // });

  return (
    <>
      <>PLACEHOLDER</>
    </>
  );
}
