import Input from "./Input";
import Button from "./Button";

function NewPostForm({ setModal, setPosts, edit, id, title, body }) {
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
        if (data.length === 2) {
            if (!edit) {
                setPosts((prev) => [
                    {
                        id: prev.length + data[0]?.value,
                        title: data[0].value,
                        body: data[1].value,
                        user: JSON.parse(localStorage.getItem("user")).user,
                    },
                    ...prev,
                ]);
            } else {
                setPosts((prev) =>
                    prev.map((post) => {
                        if (post.id === id) {
                            return {
                                ...post,
                                title: data[0].value,
                                body: data[1].value,
                            };
                        }
                        return post;
                    })
                );
            }
            setModal(false);
        }
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="grid place-items-center bg-gray-800 p-6 rounded-md"
        >
            <form className="grid text-white gap-4" onSubmit={handleSubmit}>
                <Input
                    preValue={title}
                    id={"title"}
                    label={"Título"}
                    type={"text"}
                />
                <Input
                    preValue={body}
                    id={"body"}
                    label={"Contenido"}
                    type={"textarea"}
                    inside={"¿Qué estás pensando?"}
                />
                <Button
                    text={edit ? "Editar Post" : "Publicar Post"}
                    theme={"secondary"}
                />
            </form>
        </div>
    );
}

export default NewPostForm;
