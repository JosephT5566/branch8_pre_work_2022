import React from 'react';
import { styled } from '@mui/material/styles';
import moment from 'moment';

import { Event, News, Store } from 'types/info';
import { ICONS } from 'constants/icons';

const CardContainer = styled('figure')({
	margin: 0,
	borderRadius: '0.5rem',
	boxShadow: 'gray 0 0 20px 0px',
	cursor: 'pointer',
});

const StyledIcon = styled('img')({
	width: '1rem',
	height: '1rem',
});

const StyledStoreCard = styled(CardContainer)({
	overflow: 'hidden',

	'& > img': {
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
const StyledEventCard = styled(CardContainer)(({ theme }) => ({
	overflow: 'hidden',
	display: 'flex',

	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
	'& > img': {
		width: '40%',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
	'& .content': {
		padding: '1rem',
		borderBottom: 'solid 1px gray',
	},
	'& .connect': {
		display: 'flex',
		padding: '1rem',
		justifyContent: 'space-between',
	},
}));

const StyledNewsCard = styled(CardContainer)(({ theme }) => ({
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	padding: '1rem',

	'& .head': {
		display: 'flex',
		gap: '1rem',
		justifyContent: 'space-between',

		'& > img': {
			width: '2rem',
			borderRadius: '50%',
		},
		'& .name': {
			flexGrow: 1,
		},
	},
}));

function IconLabel(props: { icon: string; alt: string; label: string }) {
	const { icon, alt, label } = props;

	return (
		<div style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
			<StyledIcon src={icon} alt={alt} />
			{label}
		</div>
	);
}

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
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<IconLabel
						icon={ICONS.time}
						alt={'time'}
						label={moment(store.date.date).format('HH:mm:ss')}
					/>
					<IconLabel icon={ICONS.phone} alt={'phone'} label={store.phone} />
				</div>
				<IconLabel icon={ICONS.location} alt={'location'} label={store.address} />
			</div>
		</StyledStoreCard>
	);
}

export function EventCard(props: { event: Event }) {
	const { event } = props;

	return (
		<StyledEventCard>
			<img src={event.image} alt="event" />
			<div>
				<div className="content">
					<div>
						<h1>{moment(event.date.date).format('HH:mm:ss')}</h1>
						<h1>{event.title}</h1>
						<p>{event.description}</p>
					</div>
					<div></div>
				</div>
				<div className="connect">
					<IconLabel
						icon={ICONS.time}
						alt={'time'}
						label={moment(event.date.date).format('HH:mm:ss')}
					/>
					<IconLabel icon={ICONS.location} alt={'location'} label={event.address} />
				</div>
			</div>
		</StyledEventCard>
	);
}

export function NewsCard(props: { news: News }) {
	const { news } = props;

	return (
		<StyledNewsCard>
			<div className="head">
				<img src={news.avatar} alt="avatar" />
				<h2 className="name">{news.title}</h2>
				<p>{moment(news.date.date).format('HH:mm:ss')}</p>
			</div>
			<h1>{news.title}</h1>
			<p>{news.description}</p>
		</StyledNewsCard>
	);
}
