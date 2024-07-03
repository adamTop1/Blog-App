import { SkeletonPostCard } from '@/components/PostCard'
import { Skeleton, SkeletonList } from '@/components/Skeleton'
import React from 'react'

const LoadingUserID = () => {
	return (
		<>
			<h1 className='page-title'>
				<Skeleton short inline />
			</h1>
			<div className='page-subtitle'>
				<Skeleton short inline />
			</div>
			<div>
				<b>Company:</b> <Skeleton short inline />
			</div>
			<div>
				<b>Website:</b> <Skeleton short inline />
			</div>
			<div>
				<b>Address:</b> <Skeleton short inline />
			</div>
			<SkeletonList amount={3}>
				<SkeletonPostCard />
			</SkeletonList>
			<SkeletonList amount={5}>
				<li>
					<Skeleton short />
				</li>
			</SkeletonList>
		</>
	)
}

export default LoadingUserID
