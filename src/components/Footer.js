import Facebook from '../images/Facebook Icon.svg';
import Instagram from '../images/Instagram Icon.svg';
import Twitter from '../images/Twitter Icon.svg';
import GitHub from '../images/GitHub Icon.svg';
import '../App.css';

function Footer() {
    return( 
        <footer className='icons-container'>
            <a href='#'><img src={Facebook} alt='Facebook'/></a>
            <a href='#'><img src={Instagram} alt='Instagram'/></a>
            <a href='#'><img src={Twitter} alt='Twitter'/></a>
            <a href='#'><img src={GitHub} alt='GitHub'/></a>
        </footer>
    )
}

export default Footer;