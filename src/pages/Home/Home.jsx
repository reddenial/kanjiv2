import { SearchInput } from '../../components/SearchInput/SearchInput';

import logo from '../../assets/images/kanji-logo.png';

import s from './style.module.css';

export function Home(props){
    return(
        <div class={s.home}>
            <img className={s.logo} src={logo} />
            <div className={s.introduction}>Welcome on the Kanji Search tool. Look for a kanji here!</div>
            <div className={s.search_input}><SearchInput /></div>
        </div>
    )
}