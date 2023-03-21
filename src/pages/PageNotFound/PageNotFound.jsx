import s from './style.module.css';
import gudetama from '../../assets/images/gudetama-hero.png';
import { Link } from 'react-router-dom';

export function PageNotFound(props){
    return (
        <div className={s.pageNotFound}>
        <img className={s.img} src={gudetama} alt="Error 404" />
        <h2>ごめん!</h2>
        <p>The page you are looking doesn't exist. Gudetama is as confused as you.</p>
        <p><Link to="/">Go back to homepage</Link></p>
        </div>
    )
}