import React from 'react'
import './style.css'
import deleteIcon from './delete.svg'
import editIcon from './pencil.svg'
import moreIcon from './more.svg'

const DevItem = ({ dev }) => (
    <li className="dev-item" >
        <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            <div className="user-actions">
                <button>
                    <img src={editIcon} alt="editar dev" />
                </button>
            </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
    </li >
)

export default DevItem