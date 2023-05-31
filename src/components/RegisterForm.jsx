import Input from "./Input";
import Button from "./Button";
import { motion } from "framer-motion";

function RegisterForm({ setPageState, setFormState }) {
    const animation = {
        hidden: {
            opacity: 0,
            x: 10,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: -10,
        },
    };

    function handleSubmit(e) {
        e.preventDefault();
        const inputs = Array.from(e.target);
        const data = inputs
            .filter((input) => input.value !== "")
            .map((input) => {
                return {
                    id: input.id,
                    value: input.value,
                };
            });
        if (data.length === 3) {
            localStorage.setItem(
                "user",
                JSON.stringify({ user: data[1].value })
            );
            setPageState(1);
        }
    }

    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid place-items-center bg-white shadow-lg shadow-gray-400 p-6 rounded-lg w-4/5 border-gray-200 border sm:w-full"
        >
            <form onSubmit={handleSubmit} className="grid gap-2 w-full">
                <Input id="email" label="Email" type="email" email />
                <Input id="user" label="Username" type="text" />
                <Input id="password" label="Password" type="password" />
                <Button text="Register" theme={"primary"} />
            </form>
            <span className="w-full mt-4">
                <Button
                    text="Login"
                    theme={"secondary"}
                    onClick={() => setFormState(0)}
                />
            </span>
        </motion.div>
    );
}

export default RegisterForm;
