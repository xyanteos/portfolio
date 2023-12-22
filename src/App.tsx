import { useState, UIEvent, useEffect } from 'react'
import './App.css'
import './assets/vite.svg'

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className={`Body`}>
      <header className={`HeaderContainer${scrolled ? ' sticky' : ''}`} >
        <div className='Logo'>
          <a href='/'>
          <span>
            Maciej
          </span>
          <img src='./vite.svg'/>
          <span>
            Nowacki
          </span>
          </a>
        </div>
        <nav className='NavBarMenu menu'>
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
