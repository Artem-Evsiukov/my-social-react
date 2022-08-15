import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props: any) {
    let postElements =
        props.postData.map((post: { message: string; likesCount: number; id: number; }) => <Post message={post.message}
                                                                                                 LikeCount={post.likesCount}
                                                                                                 id={post.id}/>);

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
            props.addPost();
        }

    let onPostChange = () => {
        if (newPostElement.current !== null) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsWrap}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add posts</button>
            </div>

            <div>
                new post
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts