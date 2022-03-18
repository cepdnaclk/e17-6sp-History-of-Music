import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Body from '../components/Body/Body'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React from 'react'
import Scroll from '../components/Body/Scroll'

export default function Home() {
    
    React.useEffect(() => {
        var loader = document.getElementById('preloader');
        window.addEventListener('load',function(){
            loader.style.display="none"
            
        })
    },[])
    return ( <div className = { styles.container } >
        <Head>
        <title>History of music</title>
        <meta name="description" content="aces" />
        <link rel="icon" href="/img/logo_1.png" />
        
        </Head>
        <div id="preloader">
            {/* <p>Loading...</p> */}
        </div>
        <NavBar page_no = {1} />
        <div className = {styles.main_container} >
        <img src = "./img/bg3.jpg" width={'100%'} height={'100%'}
        />
        <h1 class={styles.align}>Analyze music.<br />Feel it. 
        </h1>
        </div >  
        <Body />
      	{/*<Scroll />*/}
        <Footer />
        </div>
    )
    
    
}

