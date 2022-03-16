import React from 'react';
import { styled } from '@mui/material/styles';

import Stores from 'view/payment/Stores';
import Events from 'view/payment/Events';
import News from 'view/payment/News';
import { PageContainer } from 'components/base/Container';
import Carousel from 'components/share/Carousel';

const CarouselContainer = styled('div')({
	width: '100%',
	height: '400px',
});

const EventAndNewsContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	padding: '1rem max(1rem, calc((100vw - 1200px) / 2))',
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
