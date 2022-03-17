import React from 'react';
import { styled } from '@mui/material/styles';

import Stores from 'view/payment/Stores';
import Events from 'view/payment/Events';
import News from 'view/payment/News';
import { H1 } from 'components/base/Typography';
import { PageContainer } from 'components/base/Container';
import Carousel from 'components/share/Carousel';

const CarouselContainer = styled('div')(({ theme }) => ({
	width: '100%',
	height: '400px',
	position: 'relative',

	'& .label': {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '0.5rem',
		color: theme.palette.common.white,
		textAlign: 'center',
		zIndex: 1,
	},
}));

const EventAndNewsContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	padding: '3rem max(1rem, calc((100vw - 1200px) / 2))',
	gap: '1.5rem',

	[theme.breakpoints.down('md')]: {
		padding: '2rem',
		flexDirection: 'column',
	},
}));

const images = [
	'https://fakeimg.pl/1200x400/282828/EAE0D0/?text=image1',
	'https://fakeimg.pl/1200x400/582828/EAE0D0/?text=image2',
	'https://fakeimg.pl/1200x400/882828/EAE0D0/?text=image3',
];

function App() {
	return (
		<PageContainer>
			<CarouselContainer>
				<div className="label">
					<H1>{'WELCOME TO D&A HOSTEL TOKYO'}</H1>
					<p>{'A unique, diverse living space in the heart of tokyo'}</p>
				</div>
				<Carousel images={images} />
			</CarouselContainer>
			<Stores />
			<EventAndNewsContainer>
				<Events />
				<News />
			</EventAndNewsContainer>
		</PageContainer>
	);
}

export default App;
