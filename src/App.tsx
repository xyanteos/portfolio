import { useState, UIEvent, useEffect } from 'react'
import './App.css'
// import './assets/vite.svg'
// import './assets/burger.svg'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      setScrolled(window.scrollY > 0)
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  // const HandleOnScrollAction = (e : UIEvent) => {
  //   let scrolled : boolean = window.scrollY != 0;
  //   console.log(scrolled);
  //   setScrolled(scrolled)
  // }

  const HandleBurgerButtonClick = () =>{
    setBurgerActive(!burgerActive);
  }


  return (
    <div className={`Body`}>
      <header className={`HeaderContainer${scrolled ? ' sticky' : ''}`} >
        <nav className='NavBarMenu menu'>
          <a className='Logo' href='/'>
            <span>
              Maciej
            </span>
            <img src='./vite.svg'/>
            <span>
              Nowacki
            </span>
          </a>
          <a className='AboutMe mobileHidden' href='/about'>O mnie</a>
          <a className='Projekty mobileHidden' href='/projects'>Projekty</a>
          <a className='Contact mobileHidden' href='/contact'>Kontakt</a>
          <a className={`burger${burgerActive ? ' active' : ''}`} onClick={HandleBurgerButtonClick}>
            <img src='./burger.svg'/>
          </a>
        </nav>
        <nav className={`NavBarMenu menu sidebar${burgerActive ? '' : ' hidden'}`}>
          <div className='exitButtonContainer'>
            <a className={`exit${!burgerActive ? ' hidden' : ''}`} onClick={HandleBurgerButtonClick}>
              <img src='./close.svg'/>
            </a>
          </div>
          {/* <a className='Logo' href='/'>
            <span>
              Maciej
            </span>
            <img src='./vite.svg'/>
            <span>
              Nowacki
            </span>
          </a> */}
          <a className='AboutMe' href='/about'>O mnie</a>
          <a className='Projekty' href='/projects'>Projekty</a>
          <a className='Contact' href='/contact'>Kontakt</a>
        </nav>

      </header>
      <div className='Content'>
        Hey
      </div>
    </div>
  )
}

export default App
