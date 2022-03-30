import React, { Component } from 'react'
import styles from '../Body.module.css'

class About extends Component {
    render() {
        return (
            <div>
               <h4 className={styles.head}>ABOUT</h4>
               <div className={styles.AboutBg}>
                <p className={styles.paraText}>
                In the world of music, we can see that, there is a huge number of music genres and 
                each of them have various qualities. Pop, EDM, HipHop and Rap, Latin,R&B, Country and Acoustic 
                are some examples for them. Some music genres are made by combining two or more other genres. 
                We can identify them as sub genres.

                </p>
                <p className={styles.paraText}>
                In this project, we are putting an effort to build a model which can express how a piece of music 
                has evolved from various genres using machine learning. We are using a web interface to interact 
                with the users. When a music file is given as the input through the web interface, the model will 
                extract the music features and that features will be used to analyse the music genres. Then the 
                results will be displayed in a user friendly manner through the web interface.
                </p>
                </div>
            </div>
        )
    }
}

export default About
