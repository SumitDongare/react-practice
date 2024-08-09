import { useEffect } from "react";

function withLogging(Component) {

  return (props) => {
    useEffect(() => {
      console.log("I am mounted");

      return () => {
        console.log("I am unmounted");
      };
    }, []);

    return <Component {...props} isLogged = {true}></Component>
  };
}

function ExampleComponent() {
  return <div>Example Component</div>;
}

export const LoggedComponent = withLogging(ExampleComponent);
