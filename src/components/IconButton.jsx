import { IconoirProvider } from "iconoir-react";

function IconButton({ icon, onClick, style, children }) {
    return (
        <button
            className="flex gap-1 place-items-center hover:text-white"
            onClick={onClick}
        >
            <IconoirProvider
                iconProps={{
                    style,
                }}
            >
                {icon}
                {children}
            </IconoirProvider>
        </button>
    );
}

export default IconButton;
