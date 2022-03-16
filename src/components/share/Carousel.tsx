// credit: https://codesandbox.io/s/infinite-carousel-example-ifebt

import React, { useState, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import { ICONS } from 'constants/icons';

import useWidth from 'hooks/useWidth';

const CarouselContainer = styled('div')({
	width: '100%',
	height: 'inherit',
	position: 'relative',
	overflow: 'hidden',
});

const ImagesContainer = styled(animated.div)({
	display: 'inline-flex',
	height: 'inherit',
	touchAction: 'none',
});

const ImageCard = styled('div')({
	// width: '100vw',
	height: 'inherit',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
});

const IconButton = styled(MuiIconButton)(({ theme }) => ({
	color: theme.palette.common.white,
	position: 'absolute',
	zIndex: 1,
	top: '50%',
	transform: 'translate(0, -50%)',
	padding: '0.5em',
	backgroundColor: `${theme.palette.grey[800]}80`,
	'& img': {
		width: '1rem',
		height: '1rem',
		objectFit: 'contain',
	},

	'&:hover': {
		background: theme.palette.grey[800],
		color: 'white',
	},
	'&.right': {
		right: '1rem',
		'& img': {
			transform: 'rotate(180deg)',
		},
	},
	'&.left': {
		left: '1rem',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const NavButtonContainer = styled('div')({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	paddingBlock: '0.2em',
	gap: '0.5em',
	position: 'absolute',
	bottom: '0',
	left: '50%',
	transform: 'translate(-50%, 0)',
});

const StyledNavButton = styled('div')(({ theme }) => ({
	width: '0.5em',
	height: '0.5em',
	background: theme.palette.grey[600],
	borderRadius: '0.25em',
	transition: '500ms',
	cursor: 'pointer',

	'&.selected': {
		width: '2em',
		background: theme.palette.common.white,
	},
}));

interface Props {
	images: string[];
}

const AUTO_SCROLL_TIMER = 10000;

export default function Carousel({ images }: Props) {
	const CarouselRef = useRef<HTMLDivElement>(null);
	const CarouselWidth = useWidth(CarouselRef);

	// we'll ADD two images at first and last
	const extendedImages = [images[images.length - 1], ...images, images[0]];
	// use state to rerender
	const [index, setIndex] = useState(0);
	// same as index, but use this to check index and prevent from rerender
	const currentIndexRef = useRef(0);
	const minEdge = useRef(0);
	const maxEdge = useRef(0);
	const isTransiting = useRef(false);
	const isOverflow = useRef(false);

	const [position, api] = useSpring(() => ({
		x: 0,
		cursor: 'pointer',
		config: { duration: 200 },
		onStart: () => {
			isTransiting.current = true;
		},
		onRest: () => {
			isTransiting.current = false;
			api.set({ cursor: 'pointer' });
			if (currentIndexRef.current > maxEdge.current) {
				// console.log('max overflow');
				isOverflow.current = true;
				setIndex(minEdge.current);
			}

			if (currentIndexRef.current < minEdge.current) {
				// console.log('min overflow');
				isOverflow.current = true;
				setIndex(maxEdge.current);
			}
		},
	}));

	useEffect(() => {
		// Initial all params
		const length = images.length;
		minEdge.current = 1;
		maxEdge.current = minEdge.current + length - 1;

		setIndex(minEdge.current);
	}, [images]);

	useEffect(() => {
		const autoScrollId = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, AUTO_SCROLL_TIMER);

		return () => {
			clearInterval(autoScrollId);
		};
	}, []);

	useEffect(() => {
		// translateX can't larger then 0 (but that's ok in react-spring)
		isOverflow.current
			? api.set({
					// update state without animating
					x: -(index * CarouselWidth),
			  })
			: api.start({
					x: -(index * CarouselWidth),
			  });

		// update currentIndexRef
		currentIndexRef.current = index;
		isOverflow.current && (isOverflow.current = false);
	}, [index]);

	const handleNext = () => {
		!isTransiting.current && setIndex((prev) => prev + 1);
	};

	const handlePrev = () => {
		!isTransiting.current && setIndex((prev) => prev - 1);
	};

	return (
		<CarouselContainer ref={CarouselRef}>
			<ImagesContainer style={position}>
				{extendedImages.map((image, key) => (
					<ImageCard
						sx={{ width: CarouselWidth, backgroundImage: `url(${image})` }}
						key={key}
					/>
				))}
			</ImagesContainer>
			<NavButtonContainer>
				{images.map((_, key) => {
					const isSelected = minEdge.current + key === index;
					return (
						<StyledNavButton
							className={isSelected ? 'selected' : ''}
							onClick={() => {
								setIndex(minEdge.current + key);
							}}
							key={key}
						/>
					);
				})}
			</NavButtonContainer>
			<IconButton className={'right'} onClick={handleNext}>
				<img src={ICONS.arrowForward} alt={'arrow forward'} />
			</IconButton>
			<IconButton className={'left'} onClick={handlePrev}>
				<img src={ICONS.arrowForward} alt={'arrow backward'} />
			</IconButton>
		</CarouselContainer>
	);
}
