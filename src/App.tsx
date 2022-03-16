import React from 'react';
import { styled } from '@mui/material/styles';

import Stores from 'view/payment/Stores';
import Events from 'view/payment/Events';
import News from 'view/payment/News';
import { PageContainer } from 'components/base/Container';

const EventAndNewsContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	padding: '1rem max(1rem, calc((100vw - 1200px) / 2))',
	gap: '1.5rem',
	
	[theme.breakpoints.down('md')]: {
		padding: '2rem',
		flexDirection: 'column',
	},
}));

function App() {
	return (
		<PageContainer>
			<Stores />
			<EventAndNewsContainer>
				<Events />
				<News />
			</EventAndNewsContainer>
		</PageContainer>
	);
}

export default App;
