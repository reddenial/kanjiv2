import s from './style.module.css';

export function KanjiListItem({kanji}) {
    return (
        <div className={s.kanji_card}>
            <h2 className={s.kanji_title}>{kanji.kanji.character}</h2>
            <div className={s.kanji_meaning}>{kanji.kanji.meaning.english}</div>
            <div className={`${s.kanji_grade} grade_${kanji.references.grade}`}>grade&nbsp;{kanji.references.grade === null ? '?' : kanji.references.grade}</div>
            <div className={s.kanji_kodansha}>{kanji.references.kodansha}</div>
        </div>
    )
}