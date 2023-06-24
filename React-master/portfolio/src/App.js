import React, { useEffect, useRef, useState } from 'react'
import Navbar from './pages/About/Navbar/Navbar';
import Header from './pages/About/Header/Header';
import About from './pages/About/About';
// import Services from './pages/About/Services/Services';
import Portfolio from './pages/About/Portfolio/Portfolio';
// import Testimonials from './pages/About/Testimonials/Testimonials';
// import Faqs from './pages/About/FAQS/Faqs';
import Footer from './pages/About/Footer/Footer';
import Mobile from './pages/About/responsive/Mobile';
import Contact from './pages/About/contact/Contact';
import Skill from './pages/About/skills/Skill';
import Modal from './components/Modal';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
const App = () => {
  const{themeState} = useThemeContext()


  //fucntions for floating nav

  const mainRef = useRef()

  const [floatingnav,setFloatingNav]= useState(true)

  const [yposition,setYposition] = useState(0)

  const showfloatingNavHandler = ()=>{
    setFloatingNav(true)
  }
  const hidefloatingNavHandler = ()=>{
    setFloatingNav(false)
  }

  const floatingToggleHandler =()=>{
    //checking we scroll up or down
    if(yposition < (mainRef?.current?.getBoundingClientRect().y - 20) || yposition > (mainRef?.current?.getBoundingClientRect().y + 20))
    {
      showfloatingNavHandler();
    }
    else {
        hidefloatingNavHandler();
    }

    setYposition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(()=>{
   const clearYposition= setInterval(floatingToggleHandler,2000);

   //clean-up function
   return()=>clearInterval(clearYposition)
  },[yposition])

  return (
    <>
        <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
          <Navbar/>
           <Header/>
           <About/>
           {/* <Services/> */}
           <Skill/>
           <Portfolio/>
           {/* <Testimonials/> */}
           {/* <Faqs/> */}
           <Contact/>
           <Footer/>
           <Modal/>
           <Theme/>
           {
            floatingnav &&  <Mobile/>
           }
          
        </main>
    </>
  )
}

export default App
