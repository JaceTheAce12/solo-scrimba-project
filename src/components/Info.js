import Email from '../images/email.svg';
import LinkedIn from '../images/linkedin.svg';
import '../App.css';
import Jace from '../images/jace.jpg';

function Info() {
    return( 
        <div className='info'>
            <img src={Jace} alt="Jace Randolph" className='info-image'/>
            <div className='info-container'>
            <h1 className='info-name'>Jace Randolph</h1>
            <h3 className='info-title'>Frontend Developer</h3>
            <p className='info-site'>jacerandolph.website</p>
            <div className='info-buttons'>
                <a href="#" className='email-button'><img src={Email} alt="email"/>Email</a>
                <a href="#" className='linkedin-button'><img src={LinkedIn} alt="linked-in"/>LinkedIn</a>
            </div>
            </div>
        </div>
    )
}

export default Info;