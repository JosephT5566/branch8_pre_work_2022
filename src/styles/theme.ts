import { createTheme } from '@mui/material/styles';

import { typography } from './typography';
import { palette } from './palette';
import { ILayout, layout } from './layout';

declare module '@mui/material/styles/createTheme' {
	interface Theme {
		layout: ILayout;
	}
	interface ThemeOptions {
		layout?: ILayout;
	}
}

// Create a theme instance.
const theme = createTheme({ palette, typography, layout });

export default theme;
