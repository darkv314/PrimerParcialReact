const buttonConfig = {
    primary: {
        bgColor: "bg-gray-700",
        textColor: "text-white",
    },
    secondary: {
        bgColor: "bg-teal-500",
        textColor: "text-gray-900",
    },
};

function Button({ text, onClick, theme }) {
    return (
        <button
            onClick={onClick}
            className={`${buttonConfig[theme]?.bgColor} ${buttonConfig[theme]?.textColor} p-2 rounded-md w-full`}
        >
            {text}
        </button>
    );
}

export default Button;
