import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Blog App',
	description: 'Blog App built with Next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<nav className='top-nav'>
					<div className='nav-text-large'>My App</div>
					<ul className='nav-list'>
						<li>
							<Link href='/posts'>Posts</Link>
						</li>
						<li>
							<Link href='/users'>Users</Link>
						</li>
						<li>
							<Link href='/todos'>Todos</Link>
						</li>
					</ul>
				</nav>
				<div className='container'>{children}</div>
			</body>
		</html>
	)
}
