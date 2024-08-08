import React from 'react'
import { SkeletonPostForm } from '@/components/PostForm'

const loading = () => {
	return (
		<>
			<h1 className='page-title'>Edit Post</h1>
			<SkeletonPostForm />
		</>
	)
}

export default loading
