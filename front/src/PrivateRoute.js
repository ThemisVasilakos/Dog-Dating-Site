import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={routeProps => 
        !!currentUser ? (
        <RouteComponent {...routeProps} />
        ) :(
        <Navigate to="/login" />
        )
      }
    />
 )
}