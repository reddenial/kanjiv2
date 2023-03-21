import { KanjiList } from '../../containers/KanjiList/KanjiList';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import s from './style.module.css';
import { useSelector } from 'react-redux';

export function KanjiBrowse(props) {

    const searchTerm = useSelector(store => store.KANJI.searchInput);
    const kanjiList = useSelector(store => store.KANJI.kanjiList);
    const filterType = useSelector(store => store.KANJI.filterType);

    return (
        <div className={s.container}>
            <div className={s.search_container}>
                <SearchInput 
                    filterType={filterType}
                />
            </div>
            <KanjiList 
                kanjiList={kanjiList}
                searchTerm={searchTerm}   
                filterType={filterType}
            />
        </div>
    )
}