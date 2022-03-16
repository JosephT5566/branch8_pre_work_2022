import { styled } from '@mui/material/styles';

import { Button } from 'components/base/Button';
import { useGetNews } from 'api/info';
import { NewsCard } from 'components/share/Card';

const NewsContainer = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	flexBasis: '33%',
	alignItems: 'center',
	gap: '1rem',

	'& .head': {
		width: 'inherit',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const CardsContainer = styled('div')({
	display: 'flex',
	gap: '1rem',
	flexDirection: 'column',
});

export default function News() {
	const { news } = useGetNews();

	return news ? (
		<NewsContainer>
			<div className="head">
				<h1>{'News & Bulletin'}</h1>
				<Button>More</Button>
			</div>
			<CardsContainer>
				{news.map((n, index) => (
					<NewsCard news={n} key={index} />
				))}
			</CardsContainer>
		</NewsContainer>
	) : null;
}
