import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function withAuthentication(WrappedComponent) {

  return () => {
    const [isAuthenticated, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }, [navigate]);

    return isAuthenticated ?  <WrappedComponent></WrappedComponent>: <div>Your not authorised</div>;
  };
}

function ExampleComponent() {
  return <div>I am authenticated component </div>;
}


export const AuthenticatedExampleComponent = withAuthentication(ExampleComponent);

