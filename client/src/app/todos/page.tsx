import { getTodos } from '@/api/todos'
import { TodoItem } from '@/components/TodoItem'
import { Suspense } from 'react'
import { Skeleton, SkeletonList } from '@/components/Skeleton'

export default function TodoList() {
	return (
		<>
			<h1 className='page-title'>Todos</h1>
			<ul>
				<Suspense
					fallback={
						<SkeletonList amount={10}>
							<li>
								<Skeleton short />
							</li>
						</SkeletonList>
					}>
					<TodosList />
				</Suspense>
			</ul>
		</>
	)
}

async function TodosList() {
	const todos = await getTodos()

	return todos.map(todo => <TodoItem key={todo.id} {...todo} />)
}
