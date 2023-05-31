import {
    IconoirProvider,
    Jellyfish,
    Home,
    ShopAlt,
    ProfileCircle,
    LogOut,
    Menu,
} from "iconoir-react";
import IconButton from "../components/IconButton";

function Nav({ setNavMenu, setPageState, setLayoutState }) {
    return (
        <nav className="sticky top-0 flex justify-between p-4 bg-gray-800 items-center text-teal-500">
            <span className="hidden sm:block">
                <IconButton
                    icon={<Jellyfish />}
                    onClick={() => {
                        setLayoutState(0);
                    }}
                    style={{ width: "50px", height: "50px" }}
                />
            </span>

            <div className="flex gap-4 sm:gap-3">
                <IconButton
                    icon={<Home />}
                    onClick={() => {
                        setLayoutState(0);
                    }}
                    style={{ width: "35px", height: "35px" }}
                />
                {/* <IconButton
                    icon={<ShopAlt />}
                    onClick={() => {
                        setLayoutState(2);
                    }}
                    style={{ width: "35px", height: "35px" }}
                /> */}
            </div>

            <div className="gap-4 hidden sm:flex">
                <IconButton
                    icon={<ProfileCircle />}
                    onClick={() => {
                        setLayoutState(1);
                    }}
                    style={{ width: "35px", height: "35px" }}
                />
                <IconButton
                    icon={<LogOut />}
                    onClick={() => {
                        localStorage.removeItem("user");
                        setPageState(0);
                    }}
                    style={{ width: "35px", height: "35px" }}
                />
            </div>

            <div className="flex sm:hidden">
                <IconButton
                    onClick={() => setNavMenu(true)}
                    icon={<Menu />}
                    style={{ width: "35px", height: "35px" }}
                />
            </div>
        </nav>
    );
}

export default Nav;
