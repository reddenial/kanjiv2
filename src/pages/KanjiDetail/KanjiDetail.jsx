import { useSelector } from 'react-redux';
import { KanjiSingle } from '../../components/KanjiSingle/KanjiSingle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import s from './style.module.css';

export function KanjiDetail(props) {

    const filterType = useSelector(store => store.KANJI.filterType);

    return (
        <div className={s.container}>
            <div className={s.search_container}>
                <SearchInput 
                    filterType={filterType}
                />
            </div>
            <KanjiSingle />
        </div>
    )
}