import { useEffect, useState } from 'react';
import { KanjiAPI } from '../../api/kanji-api';
import { KanjiList } from '../../components/KanjiList/KanjiList';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import s from './style.module.css';

export function KanjiBrowse(props) {
    const [kanjiList, setKanjiList] = useState();

    async function fetchAllKanjis() {
        try {
            const data = await KanjiAPI.fetchKanjiList();

            if (data.length > 0) {
                setKanjiList(data);
            }
        } catch (error) {
            alert('Erreur durant la recherche des kanjis.');
        }
    }

    useEffect(() => {
        fetchAllKanjis();
    }, [])

    return (
        <div className={s.container}>
            <div className={s.search_container}>
                <SearchInput />
            </div>
            <KanjiList kanjiList={kanjiList} />
        </div>
    )
}