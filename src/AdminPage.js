import {Route, Routes} from "react-router-dom";
import SignIn from "./sign-in/sign-in";
import ProtectedRoute from "./protected-route/protected-route";
import {useState, useEffect} from "react";
import { authStateChanges } from "./utils/firebase";


export default function Pages() {
    const [currentUser, setCurrentUser] = useState(null);
    const isLogged = currentUser !== null
   
   useEffect(() => {
    const unsubscribe = authStateChanges((user) => {
      setCurrentUser(user);
     })
     return unsubscribe
   }, [])
  return (
    <>
     
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/secret"
          element={<ProtectedRoute isLoggedIn={isLogged} />}
        />
      </Routes>
    
    </>
  );
}
