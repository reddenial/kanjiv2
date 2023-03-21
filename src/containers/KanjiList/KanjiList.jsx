import { KanjiListItem } from '../../components/KanjiListItem/KanjiListItem';
import s from './style.module.css';

export function KanjiList({ kanjiList, searchTerm, filterType }){

    const data = kanjiList;

    let filteredResult = data;

    /* regex to see if it's in Japanese alphabet (hiragana, katakana, kanji)*/
    const regex = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g;

    if(filterType === 'word') {
        if (searchTerm !== '' && !searchTerm.match(regex)){
            filteredResult = data.filter(kanji => kanji.kanji.meaning.english.split(',').includes(searchTerm));
        } else if (searchTerm !== '' && searchTerm.match(regex)) {
            filteredResult = data.filter(kanji => kanji.kanji.character === searchTerm);
        } 
    } else if (filterType === 'reading') {
        if (searchTerm !== '' && !searchTerm.match(regex)) {
            filteredResult = data.filter(kanji => kanji.kanji.kunyomi.romaji.split(',').includes(searchTerm) || kanji.kanji.onyomi.romaji.split(',').includes(searchTerm)) 
        } else if (searchTerm !== '' && searchTerm.match(regex)) {
            filteredResult = data.filter(kanji => kanji.kanji.kunyomi.hiragana.split(',').includes(searchTerm) || kanji.kanji.onyomi.katakana.split(',').includes(searchTerm)) 
        }
    } 
    
    return (
        <div className={s.container}>
            {searchTerm !== "" && <div className={s.results}>{filteredResult.length} {filteredResult.length <= 1 ? 'result' : 'results'} for <span>"{searchTerm}"</span></div>}
            {filteredResult?.map((kanji, index) => {
                return <KanjiListItem key={kanji.references.kodansha + index} kanji={kanji}/>;
            })}
        </div>
    )
}