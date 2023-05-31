import { IconoirProvider, Cancel } from "iconoir-react";
import NavLink from "../components/NavLink";
import { motion } from "framer-motion";

function NavMenu({ setPageState, setNavMenu, setLayoutState }) {
    function handleOutsideClick() {
        setNavMenu(false);
    }

    const animation = {
        hidden: { x: 125, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 125, opacity: 0 },
    };

    return (
        <div
            className="fixed top-0 z-20 w-full h-full bg-black-transparent"
            onClick={handleOutsideClick}
        >
            <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45 }}
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="fixed w-3/5 right-0 h-full z-30 bg-slate-700 text-white top-0 flex flex-col gap-4 px-8 py-16 items-start sm:w-1/3"
            >
                <button
                    className="absolute top-2.5 right-2.5 hover:text-black"
                    onClick={() => setNavMenu(false)}
                >
                    <IconoirProvider>
                        <Cancel />
                    </IconoirProvider>
                </button>
                <NavLink
                    text="Inicio"
                    onClick={() => {
                        setLayoutState(0);
                        setNavMenu(false);
                    }}
                />
                <NavLink
                    text="Perfil"
                    onClick={() => {
                        setLayoutState(1);
                        setNavMenu(false);
                    }}
                />
                <NavLink
                    text="Logout"
                    onClick={() => {
                        setPageState(0);
                        setNavMenu(false);
                    }}
                />
            </motion.div>
        </div>
    );
}

export default NavMenu;
