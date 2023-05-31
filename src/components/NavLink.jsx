function NavLink({ text, onClick }) {
    return (
        <button
            className="hover:underline hover:text-teal-500"
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default NavLink;
