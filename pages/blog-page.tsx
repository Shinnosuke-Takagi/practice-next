import { GetStaticProps } from 'next';
import { getAllPostsData } from "../lib/posts"
import { Layout } from "../components/Layout"
import Post from '../components/Post';
import { PostType } from '../PostType'

interface Props {
    posts: PostType[]
}

const Blog: React.FC<Props> = ({ posts }) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => (
                    <Post key={post.id} post={post}/>
                )) }
            </ul>
        </Layout>
    )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPostsData()
    return {
        props: { posts },
    }
}