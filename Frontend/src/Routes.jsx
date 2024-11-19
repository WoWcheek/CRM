import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Sales from "./components/Sales.jsx";
import Buyers from "./components/Buyers.jsx";
import SignIn from "./components/SignIn.jsx";
import Analyses from "./components/Analyses.jsx";
import Contacts from "./components/Contacts.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
                path="/buyers"
                element={
                    <ProtectedRoute>
                        <Buyers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/sales"
                element={
                    <ProtectedRoute>
                        <Sales />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/analyses"
                element={
                    <ProtectedRoute>
                        <Analyses />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/contacts"
                element={
                    <ProtectedRoute>
                        <Contacts />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default AppRoutes;
