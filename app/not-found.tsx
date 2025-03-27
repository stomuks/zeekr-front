import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'

export default function NotFound() {
	return (
		<Layout>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Return Home</Link>
		</Layout>
	)
}
