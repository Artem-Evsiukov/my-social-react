import s from "../Dialogs.module.css";
import React from "react";

type Message = {
    message: string
    id: number
}

function Message(props: Message) {
    return (
        <div className={s.massageWrap}>
            <div className={s.massageImg}>
                <img src="https://i.pinimg.com/736x/35/4b/12/354b127a178dea8f9ab4f827a16fe779.jpg" alt=""/>
            </div>
            <div className={s.massage}>{props.message}</div>

        </div>
    )
}

export default Message