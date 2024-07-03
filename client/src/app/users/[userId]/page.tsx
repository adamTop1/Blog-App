import { getUserPosts } from '@/api/posts'
import { getUserTodos } from '@/api/todos'
import { getUser } from '@/api/users'
import { PostCard } from '@/components/PostCard'
import { TodoItem } from '@/components/TodoItem'

export default async function User({ params: { userId } }: { params: { userId: string } }) {
	const user = await getUser(userId)
	const posts = await getUserPosts(userId)
	const todos = await getUserTodos(userId)

	return (
		<>
			<h1 className='page-title'>{user.name}</h1>
			<div className='page-subtitle'>{user.email}</div>
			<div>
				<b>Company:</b>
				{user.company.name}
			</div>
			<div>
				<b>Website:</b> {user.website}
			</div>
			<div>
				<b>Address:</b>{' '}
				{`${user.address.street} ${user.address.suite}
        ${user.address.city} ${user.address.zipcode}`}
			</div>

			<h3 className='mt-4 mb-2'>Posts</h3>
			<div className='card-grid'>
				{posts.map(post => (
					<PostCard key={post.id} {...post} />
				))}
			</div>
			<h3 className='mt-4 mb-2'>Todos</h3>
			<ul>
				{todos.map(todo => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	)
}
