import { KanjiListItem } from '../KanjiListItem/KanjiListItem';
import s from './style.module.css';

export function KanjiList({ kanjiList }){
    
    return (
        <div className={s.container}>
            {kanjiList && kanjiList.slice(0, 100).map((kanji) => {
                return <KanjiListItem key={kanji.references.kodansha} kanji={kanji}/>;
            })}
        </div>
    )
}