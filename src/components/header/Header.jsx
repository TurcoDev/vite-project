
import './Header.css'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

export default function Header() {
    

    return (
        <>
            <div className='header-container'>
                <Logo />
                <div>
                    <Button text={'Home'} />
                    <Button text={'Contactos'}/>
                    <Button text={'Nosotros'}/>
                </div>
            </div>
        </>
    )
}