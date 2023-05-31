import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { IconoirProvider, Jellyfish } from "iconoir-react";

function Login({ setPageState }) {
    const [formState, setFormState] = useState(0);
    const form = [
        <LoginForm
            setPageState={setPageState}
            setFormState={setFormState}
            key="0"
        />,
        <RegisterForm
            setFormState={setFormState}
            setPageState={setPageState}
            key="1"
        />,
    ];
    return (
        <div className="min-h-screen flex justify-center bg-slate-100 flex-col items-center p-6">
            <div className="grid gap-4 place-items-center max-w-sm">
                <IconoirProvider
                    iconProps={{
                        style: {
                            width: "100px",
                            height: "100px",
                        },
                    }}
                >
                    <Jellyfish />
                </IconoirProvider>
                <p className="text-center text-xl">
                    Jellyfish te ayuda a comunicarte y compartir con las
                    personas que forman parte de tu vida.
                </p>
                {form[formState]}
            </div>
        </div>
    );
}

export default Login;
