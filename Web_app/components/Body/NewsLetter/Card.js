import React, { Component } from 'react'
import styles from '../Body.module.css'

function Card (props) {
    
        return (
            <div className={styles.CardItem}>
            <a href={props.link} style={{textDecoration: 'none'}}>
            <div className='m-2 bg-secondary'>
                <div className={styles.Card}>
                    
                    <div className={styles.Circle}>
                        
                        <i class="fas fa-book-open"></i>
                        {/* <i class="far fa-bookmark"></i> */}
                        
                    </div>
                    
                <div className={styles.CardImage}><img src={props.image}></img></div>
                <div className={styles.CardDesc}>{props.desc}</div>
                </div>
            </div>
            </a>
            </div>
        )
    
}

export default Card
