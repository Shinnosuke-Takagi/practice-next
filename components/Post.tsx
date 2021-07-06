import { PostType } from '../PostType'
import Link from 'next/link';

interface Props {
    post: PostType
}

const Post: React.FC<Props> = ({ post }) => {
    return (
        <div>
            <span>{ post.id }</span>
            {" : "}
            <Link href={`/posts/${post.id}`}>
                <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
                    {post.title}
                </span>
            </Link>
        </div>
    )
}

export default Post