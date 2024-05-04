import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentWithoutDeleteOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse compo é obrigatorio!')
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={style.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>
                    Deixe sue feedback
                </strong>
                <textarea name='comment' required onInvalid={handleNewCommentInvalid} value={newCommentText} onChange={handleNewCommentChange} placeholder='Deixe seu comentário' />
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}