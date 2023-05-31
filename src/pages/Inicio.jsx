import { useEffect, useState } from "react";
import { IconoirProvider, Cancel, AddCircle } from "iconoir-react";
import IconButton from "../components/IconButton";
import Post from "../components/Post";
import Modal from "../components/Modal";
import NewPostForm from "../components/NewPostForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AnimatePresence } from "framer-motion";

function Inicio() {
    const [posts, setPosts] = useState(
        localStorage.getItem("posts")
            ? JSON.parse(localStorage.getItem("posts"))
            : []
    );
    const [parent, enableAnimations] = useAutoAnimate();
    const [activePost, setActivePost] = useState(false);
    const { user } = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    return (
        <div className="flex flex-col h-full">
            <span className="bg-teal-500 hover:text-gray-300 rounded-full fixed bottom-4 right-4 z-10">
                <IconButton
                    onClick={() => setActivePost(true)}
                    icon={<AddCircle />}
                    style={{
                        width: "2.25rem",
                        height: "2.25rem",
                    }}
                />
            </span>
            <AnimatePresence>
                {activePost && (
                    <Modal setModal={setActivePost}>
                        <NewPostForm
                            setModal={setActivePost}
                            setPosts={setPosts}
                        />
                    </Modal>
                )}
            </AnimatePresence>
            <h1 className="self-center text-4xl font-bold py-4 text-center">{`Bienvienido ${user}`}</h1>
            <p className="self-center">
                Número total de caracteres en los posts:{" "}
                {posts.reduce((acc, current) => acc + current.body.length, 0)}
            </p>
            <section
                ref={parent}
                className="py-2 flex flex-col gap-4 w-full items-center h-full"
            >
                {posts.length === 0 && (
                    <h2 className="text-2xl">
                        {"No hay posts disponibles :("}
                    </h2>
                )}

                {posts.map((post) => (
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        id={post.id}
                        owner={post.user}
                        setPosts={setPosts}
                    />
                ))}
            </section>
        </div>
    );
}

export default Inicio;
