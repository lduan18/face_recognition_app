import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import hu from './hu.png'
const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className='Tilt br2 shadow-2' options={{max: 25}} style = {{height: 100, width: 280}}>
			<div className="Tilt-inner pa2"><img style={{paddingTop: '2px'}} alt='logo' src={hu}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;