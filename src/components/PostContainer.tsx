import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 10000
    })


    return (
        <div>
            <div>
                {isLoading && <h1>идет загрузка</h1>}
                {error && <h1>error</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
            
        </div>
    );
};

export default PostContainer;