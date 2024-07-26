'use client'

import { FormGroup } from './FormGroup'
import { Suspense } from 'react'
import Link from 'next/link'
import { SkeletonInput } from './Skeleton'
import { createPostAction, updatePostAction } from '@/actions/posts'
import { useFormState } from 'react-dom'

interface PostFormProps {
	post?: { id: number; title: string; body: string; userId: number }
	userSelectOptions: React.ReactNode
}

export function PostForm({ post, userSelectOptions }: PostFormProps) {
	const action = post == null ? createPostAction : updatePostAction.bind(null, post.id)
	const [errors, formAction] = useFormState(action, {})

	return (
		<form className='form' action={formAction}>
			<div className='form-row'>
				<FormGroup >
					<label htmlFor='title'>Title</label>
					<input type='text' name='title' id='title' defaultValue={post?.title} />
				</FormGroup>
				<FormGroup>
					<label htmlFor='userId'>Author</label>
					<select name='userId' id='userId'>
						<Suspense fallback={<option value=''>Loading...</option>}>{userSelectOptions}</Suspense>
					</select>
				</FormGroup>
			</div>
			<div className='form-row'>
				<FormGroup>
					<label htmlFor='body'>Body</label>
					<textarea name='body' id='body' defaultValue={post?.body} />
				</FormGroup>
			</div>
			<div className='form-row form-btn-row'>
				<Link className='btn btn-outline' href='/posts'>
					Cancel
				</Link>
				<button className='btn'>Save</button>
			</div>
		</form>
	)
}

export function SkeletonPostForm() {
	return (
		<form className='form'>
			<div className='form-row'>
				<FormGroup>
					<label htmlFor='title'>Title</label>
					<SkeletonInput />
				</FormGroup>
				<FormGroup>
					<label htmlFor='userId'>Author</label>
					<SkeletonInput />
				</FormGroup>
			</div>
			<div className='form-row'>
				<FormGroup>
					<label htmlFor='body'>Body</label>
					<SkeletonInput />
				</FormGroup>
			</div>
			<div className='form-row form-btn-row'>
				<Link className='btn btn-outline' href='/posts'>
					Cancel
				</Link>
				<button disabled className='btn'>
					Save
				</button>
			</div>
		</form>
	)
}
