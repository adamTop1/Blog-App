import { PostForm } from '@/components/PostForm'
import { getPost } from '@/db/posts'
import { getUsers } from '@/db/users'
import { InferGetServerSidePropsType } from 'next'

export default function EditPostPage({ users, post }: InferGetServerSidePropsType<typeof getServerSideProps>) {

	return (
		<>
			<h1 className='page-title'>Edit Post</h1>
			<PostForm post={post} users={users} />
		</>
	)
}

export const getServerSideProps = async ({ params }: any) => {
	const userId = params?.postId as string

	const [users, post] = await Promise.all([getUsers(), getPost(userId)])

  if (post == null) return { notFound: true }

	return {
		props: { users, post },
	}
}
