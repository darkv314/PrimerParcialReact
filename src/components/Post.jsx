import { ProfileCircle, MoreHoriz, Trash, EditPencil } from "iconoir-react";
import IconButton from "./IconButton";
import { useState } from "react";
import Modal from "./Modal";
import NewPostForm from "./NewPostForm";
import { AnimatePresence } from "framer-motion";

function Post({ title, body, owner, id, setPosts }) {
    const [editPost, setEditPost] = useState(false);
    const [postMenu, setPostMenu] = useState(false);
    const { user } = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="bg-gray-800 py-2 px-3 grid gap-2 rounded-md w-60 sm:w-80 md:w-96 lg:w-100 relative">
            <AnimatePresence>
                {editPost && (
                    <Modal setModal={setEditPost}>
                        <NewPostForm
                            setModal={setEditPost}
                            setPosts={setPosts}
                            edit
                            id={id}
                            title={title}
                            body={body}
                        />
                    </Modal>
                )}
            </AnimatePresence>
            <div className="flex items-center gap-3">
                {user === owner && (
                    <span className="absolute top-2 right-4 text-gray-400">
                        <IconButton
                            icon={<MoreHoriz />}
                            style={{
                                width: "1.25rem",
                                height: "1.25rem",
                                strokeWidth: 3,
                            }}
                            onClick={() => setPostMenu(!postMenu)}
                        />
                    </span>
                )}

                {postMenu && (
                    <PostMenu
                        id={id}
                        setPosts={setPosts}
                        setEditPost={setEditPost}
                        setPostMenu={setPostMenu}
                    />
                )}
                <span className="text-teal-600">
                    <IconButton
                        icon={<ProfileCircle />}
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                        }}
                    />
                </span>

                <span className="grid">
                    <h2 className="font-bold text-gray-300 text-lg break-words">
                        {owner}
                    </h2>
                    <h2 className="text-gray-200 break-words">{title}</h2>
                </span>
            </div>
            <p className="text-gray-200 overflow-y-auto break-words scrollbar">
                {body}
            </p>
        </div>
    );
}

export default Post;

function PostMenu({ setPosts, id, setEditPost, setPostMenu }) {
    function handleDelete() {
        setPosts((posts) => posts.filter((post) => post.id !== id));
        setPostMenu(false);
    }
    function handleEdit() {
        setEditPost(true);
        setPostMenu(false);
    }

    return (
        <div className="absolute top-7 right-4 bg-gray-700 text-gray-400 p-3 grid gap-2 rounded-md">
            <span className="text-red-400">
                <IconButton onClick={handleDelete} icon={<Trash />}>
                    Eliminar
                </IconButton>
            </span>
            <span className="text-teal-400">
                <IconButton onClick={handleEdit} icon={<EditPencil />}>
                    Editar
                </IconButton>
            </span>
        </div>
    );
}
