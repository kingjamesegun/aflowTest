import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SuccessPage from "./pages/SuccessPage";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import ErrorAttempt from "./pages/ErrorAttempt";
import LoginSuccess from "./pages/LoginSuccessful";
import AccountCreated from "./pages/AccountCreated";
import PhoneVerify from "./pages/PhoneVerify";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "signup", element: <SignUp /> },
	{ path: "login", element: <Login /> },
	{ path: "status", element: <SuccessPage /> },
	{ path: "verify", element: <EmailVerification /> },
	{ path: "phone-verify", element: <PhoneVerify /> },
	{ path: "error-attempt", element: <ErrorAttempt /> },
	{ path: "login-success", element: <LoginSuccess /> },
	{ path: "signup-success", element: <AccountCreated /> },
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
