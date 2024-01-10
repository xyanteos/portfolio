import { useState, UIEvent, useEffect } from 'react'
import './App.css'
import HeaderElement from './components/HeaderElement';
import { Outlet } from 'react-router';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [english, setEnglish] = useState(false);
  const [currentModeBlack, setCurrentModeBlack] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
      // console.log(window.scrollY)
    }
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setCurrentModeBlack(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('change', () => handleDarkModeChange);
    }
  })

  useEffect(() => {
    window.addEventListener('beforeunload', HandleBeforeUnloadMessage, { capture: true });

    return () => window.removeEventListener('beforeunload', HandleBeforeUnloadMessage, { capture: true });
  }, [])

  useEffect(() => {
    // console.log(`Current rendering mode state is : ${currentModeBlack ? 'black' : 'light'}`);
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      if (!currentModeBlack)
        document.getElementById("htmlIdentificator")?.setAttribute("class", "enforceLight");
      else
        document.getElementById("htmlIdentificator")?.setAttribute("class", "");
    }

    if (!isDark) {
      if (currentModeBlack)
        document.getElementById("htmlIdentificator")?.setAttribute("class", "enforceDark");
      else
        document.getElementById("htmlIdentificator")?.setAttribute("class", "");
    }

  }, [currentModeBlack])

  const HandleBeforeUnloadMessage = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    return (e.returnValue = '')
  }

  const HandleBurgerButtonClick = (): void => {
    setBurgerActive(!burgerActive);
  }

  return (
    <div className={`Body`}>

      <HeaderElement burgerActive={burgerActive} scrolled={scrolled} HabndleBurgerButtonClick={HandleBurgerButtonClick} english={english} setEnglish={setEnglish} />

      <div className='contentContainer'>
        <div className='Content'>
          <Outlet context={{ english, setEnglish, currentModeBlack, setCurrentModeBlack }} />
        </div>
      </div>
    </div>
  )
}

export default App
