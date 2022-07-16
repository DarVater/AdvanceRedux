import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";


const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 100000
    })
    const [createPost, {}] = postAPI.useCreatePostsMutation( )
    const [deletePost, {}] = postAPI.useDeletePostMutation( )
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    const  handleCreate = async () => {
        const title =  prompt()
        await createPost({
            title, body: title
        } as IPost)
    }

    const  handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const  handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div>
                <button onClick={handleCreate}>Создать пост</button>
                {isLoading && <h1>идет загрузка</h1>}
                {error && <h1>error</h1>}
                {posts && posts.map(post =>
                    <PostItem
                        remove={handleRemove}
                        update={handleUpdate}
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
            
        </div>
    );
};

export default PostContainer;