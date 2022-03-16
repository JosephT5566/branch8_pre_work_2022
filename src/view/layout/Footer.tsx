import { styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from 'components/base/Button';
import { H1, H2 } from 'components/base/Typography';

const FooterContainer = styled('footer')(({ theme }) => ({
	height: theme.layout.footer.height,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: theme.palette.common.white,
	background: theme.palette.common.black,

	'& .image': {
		width: '100%',
		height: '40%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		color: theme.palette.common.white,
		'& > h1': {
			opacity: 0.8,
		},
	},
	'& .socials': {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& .icons': {
			display: 'flex',
			gap: '1rem',
		},
	},
	'& .text': {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem',
		background: '#141414',
		'& p': {
			textAlign: 'center',
		},
	},
}));

export default function Footer() {
	return (
		<FooterContainer>
			<div
				className="image"
				style={{ backgroundImage: 'url(http://placeimg.com/640/480/any)' }}
			>
				<H2>{'Looking forword to see you'}</H2>
				<Button>{'Book now'}</Button>
			</div>
			<div className="socials">
				<H1>{'D&A Hostel'}</H1>
				<div className="icons">
					<TwitterIcon sx={{ color: 'white' }} />
					<FacebookIcon sx={{ color: 'white' }} />
					<InstagramIcon sx={{ color: 'white' }} />
					<GitHubIcon sx={{ color: 'white' }} />
				</div>
			</div>
			<div className="text">
				<p>{'©2019 Wontonmeen. Design by espressu. All right reserved.'}</p>
			</div>
		</FooterContainer>
	);
}
