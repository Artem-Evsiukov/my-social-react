import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    dialogName: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    let path = "/dialog/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.dialogImg}>
                <img src="https://i.pinimg.com/736x/35/4b/12/354b127a178dea8f9ab4f827a16fe779.jpg" alt=""/>
            </div>
            <NavLink className={s.item} to={path}>{props.dialogName}</NavLink>
        </div>
    )
}

export default DialogItem