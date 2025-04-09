import { Navigate } from "react-router";
import axios from "axios";
import { JSX, useEffect, useState } from "react";

interface AuthRouteProps {
  children: JSX.Element;
  isProtected?: boolean;
  redirectTo?: string;
}

export default function AuthRoute({
  children,
  isProtected = false,
  redirectTo = isProtected ? "/signin" : "/",
}: AuthRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/me`,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (isProtected && !isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  if (!isProtected && isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}
