'use client'

import { deletePostAction } from '@/actions/posts'

const DeleteButtonAction = ({ postId }: { postId: string }) => {
	return (
		<div>
			<button
				className='btn btn-danger'
				onClick={() => {
					if (confirm('Are you sure you want to delete this post?')) {
						deletePostAction(postId)
					}
				}}>
				Delete
			</button>
		</div>
	)
}

export default DeleteButtonAction
