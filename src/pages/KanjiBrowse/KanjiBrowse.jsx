import { KanjiList } from '../../containers/KanjiList/KanjiList';
import { SearchInput } from '../../containers/SearchInput/SearchInput';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/kanji-logo.png';
import { Link } from 'react-router-dom';

export function KanjiBrowse(props) {

    const searchTerm = useSelector(store => store.KANJI.searchInput);
    const kanjiList = useSelector(store => store.KANJI.kanjiList);
    const filterType = useSelector(store => store.KANJI.filterType);

    return (
        <div className={s.container}>
            <Link to="/"><img className={s.logo} src={logo} alt="Kanji Search Tool" title="Kanji Search Tool" /></Link>

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