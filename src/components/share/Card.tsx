import React from 'react';
import { styled } from '@mui/material/styles';
import moment from 'moment';

import { H1, H2 } from 'components/base/Typography';
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

const StyledStoreCard = styled(CardContainer)(({ theme }) => ({
	overflow: 'hidden',
	background: theme.palette.common.white,
	display: 'flex',
	flexDirection: 'column',

	'& > img': {
		width: '100%',
		height: '40%',
		objectFit: 'cover',
		objectPosition: 'center',
	},
	'& .content': {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
		justifyContent: 'space-between',
		padding: '1rem',
		borderBottom: 'solid 1px #e6e6e6',
	},
	'& .connect': {
		padding: '1rem',
	},
}));

const StyledEventCard = styled(CardContainer)(({ theme }) => ({
	overflow: 'hidden',
	display: 'flex',

	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
	'& > img': {
		width: '40%',
		objectPosition: 'center',
		objectFit: 'cover',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
	'& .content': {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5em',
		padding: '1rem',
		borderBottom: 'solid 1px #e6e6e6',
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
	gap: '0.5rem',
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

const StyledTag = styled('div')(({ theme }) => ({
	padding: '0.5em',
	background: theme.palette.background.paper,
	borderRadius: '0.25em',
}));

export function StoreCard(props: { store: Store }) {
	const { store } = props;

	return (
		<StyledStoreCard>
			<img src={store.image} alt="store" />
			<div className="content">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
					<H1>{store.title}</H1>
					<p style={{ color: 'gray' }}>{store.description}</p>
				</div>
				<div style={{ display: 'flex', gap: '1em' }}>
					{store.tags.map((t) => (
						<StyledTag>{t}</StyledTag>
					))}
				</div>
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
					<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
						<H1 sx={{ color: 'gray' }}>{moment(event.date.date).format('HH:mm:ss')}</H1>
						<H2>{event.title}</H2>
						<p style={{ color: 'gray' }}>{event.description}</p>
					</div>
					<div style={{ display: 'flex', gap: '1em' }}>
						{event.tags.map((t) => (
							<StyledTag>{t}</StyledTag>
						))}
					</div>
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
				<H2 className="name">{news.title}</H2>
				<p style={{ color: 'gray' }}>{moment(news.date.date).format('HH:mm:ss')}</p>
			</div>
			<H1>{news.title}</H1>
			<p style={{ color: 'gray' }}>{news.description}</p>
		</StyledNewsCard>
	);
}
