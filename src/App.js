import { KanjiAPI } from './api/kanji-api';

import './App.css';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setKanjiList } from './store/kanji/kanji-slice';
import { useEffect } from 'react';

export function App() {

	const dispatch = useDispatch();

	async function fetchAllKanjis(){
		const kanjiList = await KanjiAPI.fetchAllKanji();
		dispatch(setKanjiList(kanjiList))
	}

	useEffect(()=>{
		fetchAllKanjis();
	}, [])

    return (
		<div className="container App">
			<Outlet />
		</div>
    );
}