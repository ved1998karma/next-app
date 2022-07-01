
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRef, useEffect } from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  let sectionRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(sectionRef,
      {
        opacity:0,

      },
      {
        opacity:1,
        scrollTrigger: {
          trigger: sectionRef,
          start: "top top",
          end: "bottom center",
          scrub: true
        }

      })

  }, [])


  return (
    <>
      <div className={styles.container}>
        <Navbar />
      </div>

      <div className='section ' ></div>

      <div className='section flex' >
        <div className='box w-6/12 border-2 ' ref={sectionRef}></div>
        <div className='box w-6/12 border-2'></div>
      </div>

      <div className={styles.container}>
        <Footer />
      </div>
    </>
  )
}
