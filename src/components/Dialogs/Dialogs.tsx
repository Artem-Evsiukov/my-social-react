import React, {useRef} from 'react';
import DialogItem from './DialogsItem/DialogItem';
import s from './Dialogs.module.css'
import Message from "./Message/Message";


function Dialogs(props: any) {
    let dialogElements =
        props.state.DialogItem.map((d: { id: number, name: string }) => <DialogItem dialogName={d.name} id={d.id}/>);

    let messageElements =
        props.state.Message.map((m: { id: number, message: string }) => <Message message={m.message} id={m.id}/>);

    let newMessageElement = useRef<HTMLTextAreaElement>(null)

    let addMessage = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}


            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.messageAdd}>
                    <textarea ref={newMessageElement} className={s.text}></textarea>
                    <button onClick={addMessage} className={s.btn}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs