import { useState } from "react";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Layout from "./pages/Layout";

function App() {
    const [pageState, setPageState] = useState(
        localStorage.getItem("user") ? 1 : 0
    );
    const page = [
        <Login setPageState={setPageState} key="0" />,
        <Layout setPageState={setPageState} />,
    ];

    return <div className="min-h-screen">{page[pageState]}</div>;
}

export default App;
