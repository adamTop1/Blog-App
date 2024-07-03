import { SkeletonList, Skeleton, SkeletonButton } from '@/components/Skeleton'
import React from 'react'

const LoadingUsersPage = () => {
	return (
		<SkeletonList amount={6}>
			<div className='card'>
				<div className='card-header'>
					<Skeleton short />
				</div>
				<div className='card-body'>
					<Skeleton short />
					<Skeleton short />
					<Skeleton short />
				</div>
				<div className='card-footer'>
					<SkeletonButton />
				</div>
			</div>
		</SkeletonList>
	)
}

export default LoadingUsersPage
