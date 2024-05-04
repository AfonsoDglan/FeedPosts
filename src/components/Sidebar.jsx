import { Avatar } from './Avatar'
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img 
                className={style.cover} 
                src="https://images.unsplash.com/photo-1710322144652-bcea73280334?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={style.profile}>
                <Avatar src="https://github.com/afonsodglan.png" />
                <strong>Afonso Dglan</strong>
                <span>FullStack Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}