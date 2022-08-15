import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    LikeCount: number
    id:number

}

function Post(props: PostPropsType) {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://oxvo.ru/wp-content/uploads/2018/05/post_5aef4a107642d.jpeg" alt=""/>
                {props.message}
                <div className={s.like}>
                    <span>Like </span> {props.LikeCount}
                </div>
            </div>
        </div>
    )
}

export default Post