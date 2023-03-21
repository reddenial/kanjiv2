import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/Home';
import { KanjiBrowse } from './pages/KanjiBrowse/KanjiBrowse';
import { KanjiDetail } from './pages/KanjiDetail/KanjiDetail';
import { KanjiExplanation } from './pages/KanjiExplanation/KanjiExplanation';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App/>}>
						<Route path='/' element={<Home />} />
						<Route path='/kanjis/' element={<KanjiBrowse />} />
						<Route path='/kanjis/:kanjiId' element={<KanjiDetail />} />
						<Route path='/about-kanji/' element={<KanjiExplanation />} />
					</Route>
					<Route path="*" element={<PageNotFound/>} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

