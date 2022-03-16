import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export function H1(props: TypographyProps) {
	const { children, ...otherProps } = props;

	return (
		<Typography variant={'h1'} sx={{ fontWeight: 'bold' }} {...otherProps}>
			{children}
		</Typography>
	);
}

export function H2(props: TypographyProps) {
	const { children, ...otherProps } = props;

	return (
		<Typography variant={'h2'} sx={{ fontWeight: 'bold' }} {...otherProps}>
			{children}
		</Typography>
	);
}
