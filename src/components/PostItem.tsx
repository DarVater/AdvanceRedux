import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post,remove, update}) => {
    function handleRemove(event: React.MouseEvent) {
        event.stopPropagation()
        remove(post)
    }

    function handleUpdate(event: React.MouseEvent) {
        const title = prompt() || ''
        update({...post, title})
    }

    return (
        <div
            onClick={handleUpdate}
            style={{
                border: '2px solid blue',
                padding: 15,
                margin: 15,
                background: 'lightblue',
                width: 600,
                display: "flex",
                justifyContent: "space-between"
            }}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;