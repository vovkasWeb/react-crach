import logoImage from '../../assets/img/logo.svg'
import { menu } from './menu'
import './Header.scss'
const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img src={logoImage} alt='logo' height='35' />
			</div>
			<div className='wrapper'>
				<ul className='menu'>
					{menu.map((item, i) => (
						<li key={i}>
							<a href={item.link}>{item.title}</a>
						</li>
					))}
				</ul>
				<div className='buttons'>
					<button className='login-button'>Login</button>
					<button className='sign-up-button'>Sign up</button>
				</div>
			</div>
		</div>
	)
}

export default Header
