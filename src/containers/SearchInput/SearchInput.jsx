import s from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import { ButtonPrimary } from '../../components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilterType, setSearchInput } from '../../store/kanji/kanji-slice';
import { useState } from 'react';
import { Filters } from '../../components/Filters/Filters';

export function SearchInput({ filterType }) {
    const [search, setSearch] = useState('');

    function handleFilterChange(e) {
        dispatch(setFilterType(e.target.value));
    }

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setSearchInput(search));
        navigate("/kanjis/");
    }

    function handleKeyPress(e){
        if (e.key === 'Enter') {
            dispatch(setSearchInput(search));
            navigate("/kanjis/");
        }
    }

    function handleChange(e){
        setSearch(e.target.value.trim().toLowerCase());
    }

    return (
        <div className={s.container}>
            <div className={s.input_container}>
                <SearchIcon 
                    className={s.icon} 
                    size={25} 
                />
                <input 
                    className={s.search_input} 
                    type="text" 
                    placeholder={filterType === "word" ? "Type a kanji or a translation here" : "Type a prononciation here"}
                    onChange={(e) => handleChange(e)}
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <ButtonPrimary
                    isDisabled={false}
                    onClick={handleClick}
                >
                Search
                </ButtonPrimary>
            </div>
            <Filters
                filterType={filterType}
                onChange={(e) => handleFilterChange(e)}
            />
        </div>
    )
}