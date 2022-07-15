import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div style={{
            border: '2px solid blue',
            padding: 15,
            margin: 15,
            background: 'lightblue',
            width: 600,
            display: "flex",
            justifyContent: "space-between"
        }}>
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    );
};

export default PostItem;