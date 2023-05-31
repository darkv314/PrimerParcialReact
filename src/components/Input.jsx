import { useState, useEffect } from "react";
import { EMAIL_CHECK } from "../helpers/helpers";
import { motion, AnimatePresence } from "framer-motion";

function Input({ id, label, type, email, inside, preValue }) {
    const [changed, setChanged] = useState(false);
    const [value, setValue] = useState(preValue || "");
    const [error, setError] = useState("");
    const animationError = {
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 0, opacity: 0 },
    };

    useEffect(() => {
        if (!changed) return;
        else {
            if (value === "") {
                setError(`${label} es requerido`);
            } else if (email && !EMAIL_CHECK.test(value)) {
                setError("Email inválido");
            } else {
                setError("");
            }
        }
    }, [value]);

    return (
        <div className="grid gap-2 w-full">
            <label htmlFor={id}>{label}</label>
            {type === "textarea" ? (
                <textarea
                    className="text-black border-2 w-full border-gray-300 rounded-md p-2"
                    name={id}
                    id={id}
                    cols="40"
                    rows="10"
                    value={value}
                    placeholder={inside}
                    onChange={(e) => {
                        setChanged(true);
                        setValue(e.target.value);
                    }}
                ></textarea>
            ) : (
                <input
                    className="text-black border-2 w-full border-gray-300 rounded-md p-2"
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => {
                        setChanged(true);
                        setValue(e.target.value);
                    }}
                />
            )}

            {/* <AnimatePresence> */}
            <motion.p
                key={error}
                variants={animationError}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-red-500"
            >
                {error}
            </motion.p>
            {/* </AnimatePresence> */}
        </div>
    );
}

export default Input;
