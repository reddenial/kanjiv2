import { useEffect, useState } from 'react';
import { KanjiAPI } from './api/kanji-api';
import { KanjiList } from './components/KanjiList/KanjiList';

import './App.css';
import { Outlet } from 'react-router-dom';

export function App() {

    return (
		<div className="container App">
			<Outlet />
		</div>
    );
}