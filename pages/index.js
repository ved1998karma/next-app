
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/> 

      
      <Footer/>
    </div>
  )
}
