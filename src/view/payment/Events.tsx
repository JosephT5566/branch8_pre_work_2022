import { styled } from '@mui/material/styles';

import { Button } from 'components/base/Button';
import { useGetEvent } from 'api/info';
import { EventCard } from 'components/share/Card';

const StoreContainer = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '1rem',
	padding: '1rem max(1rem, calc((100vw - 1200px) / 2))',
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
	gap: '1rem',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}));

export default function Events() {
	const { events } = useGetEvent();

	return (
		<StoreContainer>
			<div className="head">
				<h1>{'Events'}</h1>
				<Button>More</Button>
			</div>
			{events && (
				<CardsContainer>
					{events.map((e, index) => (
						<EventCard event={e} key={index} />
					))}
				</CardsContainer>
			)}
		</StoreContainer>
	);
}
