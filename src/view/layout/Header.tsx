import { styled } from '@mui/material/styles';
import Navigation from './Navigation';

const HeaderContainer = styled('header')(({ theme }) => ({
	height: theme.layout.header.height,
	backgroundColor: theme.palette.common.white,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '2em max(1rem, calc((100vw - 1200px) / 2))',

	'& .logo': {
		display: 'flex',
		gap: '1em',
		alignItems: 'center',
		height: '100%',
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		'&:hover': {
			color: theme.palette.primary.main,
		},
		'& img': {
			height: '100%',
		},
	},
}));

export default function Header() {
	return (
		<HeaderContainer>
			<a className={'logo'} href="/">
				<h2>{'D&A Hostel'}</h2>
			</a>
			<Navigation />
		</HeaderContainer>
	);
}
