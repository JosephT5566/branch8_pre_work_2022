import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ROUTE } from 'constants/static';
import { ICONS } from 'constants/icons';
import { NavItem } from 'types/navigation';

const StyledLargeNav = styled('nav')({
	flexGrow: 1,
	display: 'flex',
	gap: '1rem',
});

const StyledMediumNav = styled('nav')(({ theme }) => ({
	position: 'fixed',
	display: 'flex',
	zIndex: theme.zIndex.drawer,

	left: `-100vw`,
	top: 0,
	height: '100vh',
	width: '100vw',
	backgroundColor: theme.palette.common.black,
	transition: '0.6s',
	'&.true': {
		left: '0',
	},
}));

const StyledItemsContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%',
	gap: '1rem',
	alignItems: 'start',

	[theme.breakpoints.down('sm')]: {
		paddingBlock: '1rem',
		flexDirection: 'column',
		paddingInline: '1em',
	},
}));

const StyledAnchor = styled('a')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	color: theme.palette.grey[400],
	fontFamily: theme.typography.fontFamily,

	'&:focus': {
		outline: '0',
	},

	'&.active': {
		color: theme.palette.primary.main,
	},

	// add underline
	'&::after': {
		content: `''`,
		position: 'absolute',
		height: '2px',
		width: '0%',
		background: theme.palette.primary.main,

		transition: '200ms',
		bottom: '-0.5em',
	},
	'&:hover::after': {
		width: '90%',
		background: theme.palette.primary.main,
	},
	'&:focus::after': {
		width: '90%',
	},
	'&.active::after': {
		width: '90%',
	},
	'&.active:hover::after': {
		background: theme.palette.primary.main,
	},
}));

const MenuButtonContainer = styled('div')(({ theme }) => ({
	height: theme.layout.header.height,
	display: 'flex',
	order: -1,
	top: 0,
	right: '1rem',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.primary.main,

	'&:hover': {
		backgroundColor: `${theme.palette.secondary.main}E5`,
	},
}));

const navItems = [
	new NavItem('Home', ROUTE.root),
	new NavItem('Events', ROUTE.events),
	new NavItem('News & bulletin', ROUTE.news),
	new NavItem('About', ROUTE.about),
];

const NavItems = (props: { navItems: NavItem[] }) => {
	const { navItems } = props;

	return (
		<>
			{navItems.map((n, index) => (
				<StyledAnchor href={n.route} key={index}>
					{n.label}
				</StyledAnchor>
			))}
		</>
	);
};

const NavigatorLg = () => {
	return (
		<StyledLargeNav>
			<StyledItemsContainer>
				<NavItems navItems={navItems} />
			</StyledItemsContainer>
		</StyledLargeNav>
	);
};

const NavigatorMd = () => {
	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible((prev) => !prev);
	};

	const handleClickAway = () => {
		setVisible(false);
	};

	return (
		<>
			<MenuButtonContainer>
				<StyledMenuButton aria-label="menu" onClick={handleClick}>
					<img src={ICONS.menu} alt="menu" />
				</StyledMenuButton>
			</MenuButtonContainer>
			<StyledMediumNav className={`${visible}`}>
				<StyledItemsContainer>
					<IconButton onClick={handleClickAway}>
						<CloseIcon sx={{ color: 'white' }} />
					</IconButton>
					<NavItems navItems={navItems} />
				</StyledItemsContainer>
			</StyledMediumNav>
		</>
	);
};

export default function Navigation() {
	const theme = useTheme();

	return useMediaQuery(theme.breakpoints.down('md')) ? <NavigatorMd /> : <NavigatorLg />;
}
