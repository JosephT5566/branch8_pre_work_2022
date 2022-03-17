import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from 'view/layout/Header';
import Footer from 'view/layout/Footer';
import { ContentContainer } from 'components/base/Container';

import theme from 'styles/theme';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Header />
				<ContentContainer>
					<App />
				</ContentContainer>
				<Footer />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
