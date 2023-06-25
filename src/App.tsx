import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SuccessPage from "./pages/SuccessPage";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import ErrorAttempt from "./pages/ErrorAttempt";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "signup", element: <SignUp /> },
	{ path: "login", element: <Login /> },
	{ path: "status", element: <SuccessPage /> },
	{ path: "verify", element: <EmailVerification /> },
	{ path: "error-attempt", element: <ErrorAttempt /> },
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
