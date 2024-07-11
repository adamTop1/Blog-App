'use client'

import { FormGroup } from '@/components/FormGroup'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, ReactNode, Suspense, useRef } from 'react'

function SearchForm({userOptions}: {userOptions: ReactNode}) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathName = usePathname()
	const query = searchParams.get('query') || ''
	const userId = searchParams.get('userId') || ''
	const queryRef = useRef<HTMLInputElement>(null)
	const userRef = useRef<HTMLSelectElement>(null)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const params = new URLSearchParams(searchParams)
		params.set('query', queryRef.current?.value || '')
		params.set('userId', userRef.current?.value || '')

		router.push(`${pathName}?${params.toString()}`)
	}

	return (
		<form className='mb-4 form' onSubmit={handleSubmit}>
			<div className='form-row'>
				<FormGroup>
					<label htmlFor='query'>Query</label>
					<input type='search' name='query' id='query' defaultValue={query} ref={queryRef} />
				</FormGroup>
				<FormGroup>
					<label htmlFor='userId'>Author</label>
					<select name='userId' id='userId' defaultValue={userId} ref={userRef}>
						<Suspense key={`${userId}`} fallback={<option value=''>Loading...</option>}>
                            {userOptions}
                        </Suspense>
					</select>
				</FormGroup>
				<button className='btn'>Filter</button>
			</div>
		</form>
	)
}

export default SearchForm
