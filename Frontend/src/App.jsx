import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import Navigation from "./components/Navigation.jsx";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <Navigation />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
