import Nav from "../views/Nav";
import { AnimatePresence } from "framer-motion";
import NavMenu from "../views/NavMenu";
import { useState } from "react";
import Inicio from "./Inicio";
import Perfil from "./Perfil";
import Market from "./Market";

function Layout({ setPageState }) {
    const [navMenu, setNavMenu] = useState(false);
    const [layoutState, setLayoutState] = useState(0);
    const layout = [<Inicio key={0} />, <Perfil key={1} />, <Market key={2} />];

    return (
        <div className="min-h-screen bg-slate-200">
            <AnimatePresence>
                {navMenu && (
                    <NavMenu
                        setNavMenu={setNavMenu}
                        setPageState={setPageState}
                        setLayoutState={setLayoutState}
                    />
                )}
            </AnimatePresence>
            <Nav
                setNavMenu={setNavMenu}
                setPageState={setPageState}
                setLayoutState={setLayoutState}
            />
            {layout[layoutState]}
        </div>
    );
}

export default Layout;
