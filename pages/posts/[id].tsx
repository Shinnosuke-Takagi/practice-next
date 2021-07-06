import { Layout } from "../../components/Layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostType } from "../../PostType";

interface Props {
    post: PostType
}

const Post: React.FC<Props> = ({ post }) => {
    if (!post) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <Layout
            title={post.title}
        >
            <p className="m-4">
                {"ID : "}
                { post.id }
            </p>
            <p className="mb-8 text-xl font-bold">{ post.title }</p>
            <p className="px-10">{ post.body }</p>
            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                    <svg 
                        className="w-6 h-6 mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        >
                        </path>
                    </svg>
                    <span>Back to blog-page</span>
                </div>
            </Link>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: {params: {id: string}}) => {
    const {post: post} = await getPostData(params.id)
    return {
        props: {
            post
        }
    }
}

export default Post