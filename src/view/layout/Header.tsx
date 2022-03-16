import { styled } from '@mui/material/styles';

import Navigation from './Navigation';
import IconButton from '@mui/material/IconButton';

import { ICONS } from 'constants/icons';

const HeaderContainer = styled('header')(({ theme }) => ({
	height: theme.layout.header.height,
	backgroundColor: theme.palette.common.white,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '8rem',
	paddingInline: 'max(1rem, calc((100vw - 1200px) / 2))',

	[theme.breakpoints.down('md')]: {
		gap: 0,
	},

	'& .logo': {
		display: 'flex',
		gap: '1em',
		alignItems: 'center',
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		'&:hover': {
			color: theme.palette.primary.main,
		},
		'& img': {
			height: '1.5rem',
		},
	},

	'& *': {
		// flexGrow: 1,
	},
}));

export default function Header() {
	return (
		<HeaderContainer>
			<a className={'logo'} href="/">
				<img src={ICONS.logo_black} alt="logo" height={'1.5rem'} />
			</a>
			<Navigation />
			<IconButton>
				<img src={ICONS.account} alt="" />
			</IconButton>
		</HeaderContainer>
	);
}
