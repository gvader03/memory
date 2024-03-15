import Logo from '../assets/Bluey.png'
import './header.css'

export default function Header() {
    return (
        <div className='header-body'>
            <img src={Logo} className="header-image" alt="Bluey image" />
            <h1 className='title'>Memory Snap</h1>
        </div>
    )
}