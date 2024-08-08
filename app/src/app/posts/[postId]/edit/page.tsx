import { PostForm } from '@/components/PostForm'
import React from 'react'
import { getPost } from '@/db/posts'
import { notFound } from 'next/navigation'
import { UserSelectOptions } from '../../userSelectOptions'
import { getUsers } from '@/db/users'

const page = async ({ params }: any) => {
	const postId = params.postId
	const [post, users] = await Promise.all([getPost(postId), getUsers()] )

  if (post == null) return notFound()

	return (
		<>
			<h1 className='page-title'>Edit Post</h1>
			<PostForm post={post}  userSelectOptions={<UserSelectOptions users={users} />} />
		</>
	)
}

export default page
