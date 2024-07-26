'use client'

import { deletePostAction } from '@/actions/posts'
import { useTransition } from 'react'

const DeleteButtonAction = ({ postId }: { postId: string }) => {
	const [isPending, startTransition] = useTransition()

	return (
		<button
			disabled={isPending}
			className='btn btn-danger'
			onClick={() => {
				if (confirm('Are you sure you want to delete this post?')) {
					startTransition(async () => {
						await deletePostAction(postId)
					})
				}
			}}>
			{isPending ? 'Deleting...' : 'Delete'}
		</button>
	)
}

export default DeleteButtonAction
