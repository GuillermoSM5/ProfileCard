import React from 'react';
import './card.scss';
import headCard from '../picture/bg-pattern-card.svg';
import pictureProfile from '../picture/github.jpeg';

function card() {
	return (
		<div className='wrapper'>
			<div className='card'>
				<div className='headCard'>
					<div className='cover'>
						<img src={headCard} alt='' />
					</div>
					<div className='pictureProfile'>
						<img src={pictureProfile} alt='' />
					</div>
				</div>

				<div className='info'>
					<p className='name'>
						Guillermo Soto <span> 29</span>
					</p>
					<p className='city'>Mexico city</p>
					<div className='stats'>
						<div className='followers'>
							<p>80K</p>
							<span>Followers</span>
						</div>
						<div className='followers'>
							<p>803K</p>
							<span>Likes</span>
						</div>
						<div className='followers'>
							<p>1.4K</p>
							<span>Photos</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default card;
