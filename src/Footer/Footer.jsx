import duck from '../assets/duck.png'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={duck} alt="Ducky Logo" className='duck' />
            <h3>Ducky Designs 2024</h3>
        </div>
    )
}