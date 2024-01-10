import { Link } from "react-router-dom";
import LanguageOptionsSlider from "./OptionsPage/LanguageOptionsSlider";
import {NavigationLanguageOnlyType} from "./Global/Types/NavigationOutletType";

type expectedContext = NavigationLanguageOnlyType & {
    burgerActive : boolean,
    scrolled: boolean,
    HabndleBurgerButtonClick : () => void
}


const HeaderElement = ({ burgerActive, scrolled, HabndleBurgerButtonClick, english, setEnglish } : expectedContext) =>{

    // TODO: Simplify this element by using the english and setEnglish props

    const englishNavBar = () : JSX.Element => {
        return(
            <header className={`HeaderContainer${scrolled ? ' sticky' : ''}`} >
            <nav className='NavBarMenu menu'>
                <Link className='Logo' to='/'>
                    <span>
                    Maciej
                    </span>
                    <img src='./vite.svg'/>
                    <span>
                    Nowacki
                    </span>
                </Link>
                <LanguageOptionsSlider english={english} setEnglish={setEnglish} header={true}/>
                <Link className="mobileHidden" to='/about' >About me</Link>
                <Link className="mobileHidden" to='/projects' >Projects</Link>
                <Link className="mobileHidden" to='/contact' >Contact</Link>
                <Link className="mobileHidden" to="/options">Options</Link>
                <a className={`burger${burgerActive ? ' active' : ''}`} onClick={HabndleBurgerButtonClick}>
                    <img src='./burger.svg'/>
                </a>
            </nav>
            <nav className={`NavBarMenu menu sidebar${burgerActive ? '' : ' hidden'}`}>
                <div className='exitButtonContainer'>
                    <a className={`exit${!burgerActive ? ' hidden' : ''}`} onClick={HabndleBurgerButtonClick}>
                    <img src='./close.svg'/>
                    </a>
                </div>
                <Link className="AboutMe" to='/about' onClick={HabndleBurgerButtonClick}>About me</Link>
                <Link className="Projects" to='/projects' onClick={HabndleBurgerButtonClick}>Projects</Link>
                <Link className="Contact" to='/contact' onClick={HabndleBurgerButtonClick}>Contact</Link>
                <Link className="Options" to='/options' onClick={HabndleBurgerButtonClick}>Options</Link>
            </nav>
        </header>
        )
    }

    const polishNavBar = () : JSX.Element =>{
        return(
            <header className={`HeaderContainer${scrolled ? ' sticky' : ''}`} >
            <nav className='NavBarMenu menu'>
                <Link className='Logo' to='/'>
                    <span>
                    Maciej
                    </span>
                    <img src='./vite.svg'/>
                    <span>
                    Nowacki
                    </span>
                </Link>
                <LanguageOptionsSlider english={english} setEnglish={setEnglish} header={true}/>
                <Link className="mobileHidden" to='/about' >O mnie</Link>
                <Link className="mobileHidden" to='/projects' >Projekty</Link>
                <Link className="mobileHidden" to='/contact' >Kontakt</Link>
                <Link className="mobileHidden" to="/options">Opcje</Link>
                <a className={`burger${burgerActive ? ' active' : ''}`} onClick={HabndleBurgerButtonClick}>
                    <img src='./burger.svg'/>
                </a>
            </nav>
            <nav className={`NavBarMenu menu sidebar${burgerActive ? '' : ' hidden'}`}>
                <div className='exitButtonContainer'>
                    <a className={`exit${!burgerActive ? ' hidden' : ''}`} onClick={HabndleBurgerButtonClick}>
                    <img src='./close.svg'/>
                    </a>
                </div>
                <Link className="AboutMe" to='/about' onClick={HabndleBurgerButtonClick}>O mnie</Link>
                <Link className="Projects" to='/projects' onClick={HabndleBurgerButtonClick}>Projekty</Link>
                <Link className="Contact" to='/contact' onClick={HabndleBurgerButtonClick}>Kontakt</Link>
                <Link className="Options" to='/options' onClick={HabndleBurgerButtonClick}>Opcje</Link>
            </nav>
        </header>
        )
    }

    if(english) return englishNavBar()
    else return polishNavBar()  
}

export default HeaderElement