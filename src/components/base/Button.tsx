import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme }) => ({
	backgroundColor: theme.palette.common.black,
	color: theme.palette.common.white,
	textTransform: 'inherit',
	'&:hover': {
		backgroundColor: theme.palette.grey[700],
	},
}));
