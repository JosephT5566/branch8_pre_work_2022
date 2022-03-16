import { styled } from '@mui/material/styles';

import { Button } from 'components/base/Button';
import { useGetEvents } from 'api/info';
import { EventCard } from 'components/share/Card';

const StoreContainer = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexBasis: '66%',
	alignItems: 'center',
	gap: '1rem',
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
	flexDirection: 'column',
	gap: '1rem',
}));

export default function Events() {
	const { events } = useGetEvents();

	return events ? (
		<StoreContainer>
			<div className="head">
				<h1>{'Events'}</h1>
				<Button>More</Button>
			</div>
			<CardsContainer>
				{events.map((e, index) => (
					<EventCard event={e} key={index} />
				))}
			</CardsContainer>
		</StoreContainer>
	) : null;
}
