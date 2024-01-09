import { useState, UIEvent, useEffect } from 'react'
import './App.css'
import HeaderElement from './components/HeaderElement';
import { Outlet } from 'react-router';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [english, setEnglish] = useState(false);
  const [currentModeBlack, setCurrentModeBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
      // console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

useEffect(()=>{
  window.addEventListener('beforeunload', HandleBeforeUnloadMessage, {capture: true});
  
  return ()=> window.removeEventListener('beforeunload', HandleBeforeUnloadMessage, {capture: true});
}, [])

 const HandleBeforeUnloadMessage = (e : BeforeUnloadEvent) =>{
  e.preventDefault();
  return (e.returnValue = '')
 }

 const HandleEnglishFieldChange = () : void =>{
  setEnglish(!english);
 }

  const HandleBurgerButtonClick = (): void => {
    setBurgerActive(!burgerActive);
  }

  return (
    <div className={`Body`}>

      <HeaderElement burgerActive={burgerActive} scrolled={scrolled} HabndleBurgerButtonClick={HandleBurgerButtonClick} HandleEnglishFieldChange={HandleEnglishFieldChange}/>

      <div className='contentContainer'>
        <div className='Content'>
          <Outlet context = {{english, setEnglish, currentModeBlack, setCurrentModeBlack}} />
        </div>
      </div>
    </div>
  )
}

export default App
