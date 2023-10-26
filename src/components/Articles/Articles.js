import React, { useEffect, useState } from 'react'
import './Articles.scss'

const Articles = () => {
	const [city, setCity] = useState('')
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const respons = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				)
				const data = await respons.json()
				setPosts(data)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])
	console.log(posts)
	return (
		<div>
			<h1>Articles</h1>
			{loading ? 'загрузка' : null}
			<input
				type='text'
				value={city}
				onChange={e => setCity(e.target.value)}
				placeholder='Enter city'
			/>
			{posts.length ? (
				posts.map(post => (
					<div className='card'>
						<h4>{post.title} 00</h4>
						<p>{post.body}</p>
						<a href='/'>Read now</a>
					</div>))
			) : (
				<h1>Login</h1>
			)}
		</div>
	)
}

export default Articles
