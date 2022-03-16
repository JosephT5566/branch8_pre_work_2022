import React from 'react';
import { styled } from '@mui/material/styles';
import { Event, News, Store } from 'types/info';

const CardContainer = styled('figure')({
	margin: 0,
	borderRadius: '0.5rem',
	boxShadow: 'gray 0 0 20px 0px',
	cursor: 'pointer',
});

const StyledStoreCard = styled(CardContainer)({
	overflow: 'hidden',

	'& img': {
		width: '100%',
	},
	'& .content': {
		padding: '1rem',
		borderBottom: 'solid 1px gray',
	},
	'& .connect': {
		padding: '1rem',
	},
});
const StyledEventCard = styled(CardContainer)({
	overflow: 'hidden',

	'& img': {
		width: '100%',
	},
	'& .content': {
		padding: '1rem',
		borderBottom: 'solid 1px gray',
	},
	'& .connect': {
		padding: '1rem',
	},
});

export function StoreCard(props: { store: Store }) {
	const { store } = props;

	return (
		<StyledStoreCard>
			<img src={store.image} alt="store" />
			<div className="content">
				<div>
					<h1>{store.title}</h1>
					<p>{store.description}</p>
				</div>
				<div></div>
			</div>
			<div className="connect">
				<div>
					<div>{store.date.date}</div>
					<div>{store.phone}</div>
				</div>
				<div>{store.address}</div>
			</div>
		</StyledStoreCard>
	);
}

export function EventCard(props: { event: Event }) {
	const { event } = props;

	return (
		<StyledEventCard>
			<img src={event.image} alt="event" />
			<div className="content">
				<div>
					<h1>{event.date.date}</h1>
					<h1>{event.title}</h1>
					<p>{event.description}</p>
				</div>
				<div></div>
			</div>
			<div className="connect">
				<div>
					<div>{event.date.date}</div>
				</div>
				<div>{event.address}</div>
			</div>
		</StyledEventCard>
	);
}

export function NewsCard(props: { news: News }) {
	const {} = props;

	return <CardContainer></CardContainer>;
}
