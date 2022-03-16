import React from 'react';
import { styled } from '@mui/material/styles';

import { Button } from 'components/base/Button';
import { useGetSurroundingStore } from 'api/info';
import { StoreCard } from 'components/share/Card';
import { H1 } from 'components/base/Typography';

const StoreContainer = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '1rem',
	padding: '1rem max(1rem, calc((100vw - 1200px) / 2))',
	backgroundColor: '#e8e8e8',
	[theme.breakpoints.down('md')]: {
		padding: '2rem',
	},

	'& .head': {
		width: 'inherit',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const CardsContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '1.5rem',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}));

export default function Stores() {
	const { stores } = useGetSurroundingStore();

	return stores ? (
		<StoreContainer>
			<div className="head">
				<H1>{'Surrounding Store'}</H1>
				<Button>More</Button>
			</div>
			<CardsContainer>
				{stores.map((s, index) => (
					<StoreCard store={s} key={index} />
				))}
			</CardsContainer>
		</StoreContainer>
	) : null;
}
