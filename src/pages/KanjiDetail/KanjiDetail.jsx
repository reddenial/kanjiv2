import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { KanjiSingle } from '../../containers/KanjiSingle/KanjiSingle';
import { SearchInput } from '../../containers/SearchInput/SearchInput';
import logo from '../../assets/images/kanji-logo.png';
import s from './style.module.css';

export function KanjiDetail(props) {

    const filterType = useSelector(store => store.KANJI.filterType);

    return (
        <div className={s.container}>
            <Link to="/"><img className={s.logo} src={logo} alt="Kanji Search Tool" title="Kanji Search Tool" /></Link>
            <div className={s.search_container}>
                <SearchInput 
                    filterType={filterType}
                />
            </div>
            <KanjiSingle />
        </div>
    )
}