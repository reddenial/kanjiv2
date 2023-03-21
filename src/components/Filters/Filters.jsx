import s from './style.module.css';

export function Filters({ filterType, onChange }){

    return (
        <div className={s.filters} onChange={onChange}>
            <span>Searching by&nbsp;: </span>
            <input type="radio" name="filter" id="word" value="word" checked={filterType === 'word'} />
            <label htmlFor="word">word/meaning</label>
            <input type="radio" name="filter" id="reading" value="reading" checked={filterType === 'reading'} />
            <label htmlFor="reading">reading</label>
        </div>
    )
}