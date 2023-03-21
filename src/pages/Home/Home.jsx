import { SearchInput } from '../../components/SearchInput/SearchInput';

import logo from '../../assets/images/kanji-logo.png';

import s from './style.module.css';
import { Link } from 'react-router-dom';
import { InfoCircleFill as InfoIcon } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

export function Home(props){

    const filterType = useSelector(store => store.KANJI.filterType);

    return(
        <div className={s.home}>
            <img className={s.logo} src={logo} alt="Kanji Search Tool" title="Kanji Search Tool" />
            <div className={s.introduction}>Welcome on the <span>Kanji Search tool</span>. Look for a kanji here!</div>
            <div className={s.search_input}>
                <SearchInput 
                    filterType={filterType}
                />
            </div>
            <span className={s.note}><span className={s.icon}><InfoIcon /></span> If you don't know what a kanji is. Read this <Link to="/about-kanji/">explanation</Link>.</span>
        </div>
    )
}