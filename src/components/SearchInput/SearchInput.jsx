import s from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';

export function SearchInput(props) {
    return (
        <div className={s.container}>
            <SearchIcon className={s.icon} size={25} />
            <input className={s.search_input} type="text" placeholder="Type a kanji or a translation here"/>
            <ButtonPrimary
                isDisabled={false}
            >
            Search
            </ButtonPrimary>
        </div>
    )
}