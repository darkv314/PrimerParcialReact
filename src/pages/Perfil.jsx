import { IconoirProvider, ProfileCircle } from "iconoir-react";

function Perfil() {
    const { user } = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="flex flex-col min-h-full items-center justify-center p-4 text-gray-300">
            <section className="bg-gray-800 grid place-items-center p-4 rounded-md h-full">
                <h1 className="self-center text-4xl font-bold py-4 text-center">{`Bienvienid@ ${user}`}</h1>
                <IconoirProvider
                    iconProps={{
                        style: {
                            width: "10rem",
                            height: "10rem",
                        },
                    }}
                >
                    <ProfileCircle />
                </IconoirProvider>
            </section>
        </div>
    );
}

export default Perfil;
