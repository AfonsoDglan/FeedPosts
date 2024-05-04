import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    return (
        <div className={style.comment}>
            <Avatar src="https://github.com/afonsodglan.png" hasBorder={false}/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Afonso Dglan</strong>
                            <time title='19 de Mario às 17:12h' dateTime='2024-03-19 17:12:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar commentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}