import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PlayCircleFill as PlayIcon } from 'react-bootstrap-icons';

import s from './style.module.css';

export function KanjiSingle(props){

    const { kanjiId } = useParams();

    const kanji = useSelector((store) => store.KANJI.kanjiList.find((kanji) => kanji.kanji.character === kanjiId))

    function onClickPlay(index){
        const audio = document.getElementById(`audio-${index}`);
        audio.play();
    }

    return (
        <div className={s.kanji_single}>
            { kanji && 
                <div className={s.container}>
                    <div className={s.kanji_infos}>
                        <h2>Kanji infos</h2>
                        <div className={s.row}>
                            <div className={s.col}>
                                <p><img className={s.video_poster} src={kanji.kanji.video.poster} alt="kanji-poster-img" /></p>
                                <h3>Strokes order</h3>
                                <div className={s.strokes_order}>{kanji.kanji.strokes.images.map((stroke, index) => <img key={`stroke-${index}`} className={s.strokes} src={stroke} alt="strokes-img" />)}</div>
                            </div>
                            <div className={s.col}>
                                <h3>Meaning</h3>
                                <p>{kanji.kanji.meaning.english}</p>
                                <h3>Onyomi</h3>
                                <p>{kanji.kanji.onyomi.katakana === 'n/a' ? '/' : kanji.kanji.onyomi.katakana} <span className={s.romaji}>{kanji.kanji.onyomi.romaji === 'n/a' ? '' : kanji.kanji.onyomi.romaji}</span></p>
                                <h3>Kunyomi</h3>
                                <p>{kanji.kanji.kunyomi.hiragana === 'n/a' ? '/' : kanji.kanji.kunyomi.hiragana} <span className={s.romaji}>{kanji.kanji.kunyomi.romaji === 'n/a' ? '' : kanji.kanji.kunyomi.romaji}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={s.radical}>
                        <h2>Radical</h2>
                        <div className={s.row}>
                            <div className={s.col}>
                                <img className={s.img} src={kanji.radical.image} alt="radical-img" />
                                <div>{kanji.radical.strokes}</div>
                            </div>
                            <div className={s.col}>
                                <p>{kanji.radical.name.hiragana} <span className={s.romaji}>{kanji.radical.name.romaji}</span></p>
                                <p>{kanji.radical.meaning.english}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.infos}>
                        <h2>Infos</h2>
                        <div className={s.row}>
                            <div className={s.col}>
                                <h3>Strokes</h3>
                                <p>{kanji.kanji.strokes.count}</p>
                                <h3>Grade</h3>
                                <p>{kanji.references.grade}</p>
                            </div>
                            <div className={s.col}>
                                <h3>Kodansha</h3>
                                <p>{kanji.references.kodansha}</p>
                                <h3>Classic Nelson</h3>
                                <p>{kanji.references.classic_nelson}</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.examples}>
                        <h2>Examples</h2>
                        {kanji.examples.map((example, index) => {
                            return (
                            <div className={s.example} key={`example-${index}`}>
                                <div className="col">
                                    <div className="japanese">
                                        {example.japanese}
                                    </div>
                                    <div className={s.english}>
                                        {example.meaning.english}
                                    </div>
                                </div>
                                <div className="col">
                                    <PlayIcon size={20} className={`${s.icon} icon-${index}`} onClick={() => onClickPlay(index)}/>
                                    <audio id={`audio-${index}`} src={example.audio.mp3}></audio>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            }
        </div>
    )
}