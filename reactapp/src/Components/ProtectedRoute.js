import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component, ...rest }) => {
  var RenderComponents = component;
  let hasToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null  ? (
          <RenderComponents {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
            }}
          />
        );
      }}
    />
  );
};
export default ProtectedRoute;