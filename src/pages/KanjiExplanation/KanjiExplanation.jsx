import { Link } from 'react-router-dom';
import s from './style.module.css';

import { HouseFill as HouseIcon } from 'react-bootstrap-icons';

import sentence from '../../assets/images/sentence.jpg';
import kanjiwords from '../../assets/images/kanjiwords.jpg';

export function KanjiExplanation(props) {
    return (
        <div className={s.container}>
            <h2 className={s.title}>What is a kanji?</h2>
            <p className={s.content}><span class={s.kanji}>Kanji <span>漢字</span></span> are Japanese characters, and one of three writing systems in Japanese. The other two are <span class={s.hiragana}>hiragana <span>ひらがな</span></span> and <span class={s.katakana}>katakana <span>カタカナ</span></span>, collectively called kana.</p>
            <figure className={s.img}>
                <img src={sentence} title="sentence" alt="sentence" />
                <figcaption>Translation above : I like anime.</figcaption>
            </figure>
            <p className={s.content}><span class={s.hiragana}>Hiragana <span>ひらがな</span></span> and <span class={s.katakana}>katakana <span>カタカナ</span></span> are basically the print and cursive alphabet of Japanese, a phonetic syllabary system.</p>
            <p className={s.content}><span class={s.kanji}>Kanji <span>漢字</span></span> are Japanese symbols coming from Chinese language that represent whole words.</p>
            <p className={s.content}><span class={s.kanji}>Kanji <span>漢字</span></span> symbols can stand alone, or combine with other <span class={s.kanji}>kanji</span> or <span class={s.hiragana}>kana</span> to create more words, ideas. Their pronunciation and readings vary based on what they’re connected with — that’s the difficult part. The easy part is that they make reading easier.</p>
            <p className={s.content}>Even if you don’t know how to pronounce the <span class={s.kanji}>Kanji <span>漢字</span></span>, if you recognize it’s word meaning, you can get the idea of the sentence.</p>
            <figure className={s.img}>
                <img src={kanjiwords} title="kanji word" alt="kanji word" />
                <figcaption>Examples of words using the kanji of water.</figcaption>
            </figure>
            <p className={s.content}>For example, the <span class={s.water}>kanji 水</span>. This kanji’s meaning is <span class={s.water}>“water”</span>.</p> 
            <p className={s.content}>Its Japanese pronunciation is most often <span class={s.hiragana}>みず (mizu)</span> or <span class={s.katakana}>スイ (sui)</span>.</p>
            <p className={s.content}> When <span class={s.water}>水</span> combines with <span class={s.clothing}>着</span> (the kanji for <span class={s.clothing}>“clothing”</span>), it becomes <span class={s.clothing}>水着 (mizugi)</span> which means <span class={s.clothing}>“swimsuit”</span>. Basically, “<span class={s.water}>water</span> <span class={s.clothing}>clothes</span>”.</p>
            <p className={s.content}>But in the word <span class={s.water}>水</span><span class={s.dayoftheweek}>曜日</span> (which means <span class={s.dayoftheweek}>“wednesday”</span>), we use its other reading, <span class={s.katakana}>sui</span> and it becomes <span class={s.dayoftheweek}>suiyoubi</span>.</p>

            <div className={s.back_to_home}><Link to="/"><HouseIcon className={s.icon} />Back to homepage</Link></div>
        </div>
    )
}