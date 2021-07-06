import fetch from 'node-fetch'
import { PostType } from '../PostType'
const apiUrl = "https://jsonplaceholder.typicode.com/posts"

const getAllPostsData = async () => {
    const res = await fetch(new URL(apiUrl))
    const posts: PostType[] = await res.json()
    return posts
}

const getAllPostIds = async () => {
    const res = await fetch(new URL(apiUrl))
    const posts: PostType[] = await res.json()
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            }
        }
    })
}

const getPostData = async (id: string) => {
    const res = await fetch(new URL(`${apiUrl}/${id}`))
    const post: PostType = await res.json()
    return {
        post,
    }
}

export {
    getAllPostsData,
    getAllPostIds,
    getPostData
}
