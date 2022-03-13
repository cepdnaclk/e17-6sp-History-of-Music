import React, { Component } from "react";

import styles from '../styles/Teams.module.css';
import Scroll from '../components/Body/Scroll'
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

class TeamsPage extends Component {
    render() { 
        return( 
        <div className={styles.bg}> 
            
            <Navbar page_no = {4}/>
            <div className="container mt-5 mb-5">

                <h3 className="text-primary text-center">EXECUTIVE COMMITTE 2021/2022</h3>

                <hr className="bg-primary"></hr>

                <div className="row" style={{marginLeft:'2%',justifyContent:"center"}}>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/012v3.png"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Team Member<br/>
                                <b>Aminda Amarasinghe</b></small>
                            </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/038v1.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Team Member<br/>
                                <b>Anuruddha Chandrasekara</b></small>
                                </div>
                        </div>

                        <div className={`${styles.card}`}>
                            <div className={styles.card_img}>
                                <img src="/img/comittee/101v1.jpg"></img>
                            </div>
                            <div className={styles.card_container}>
                                <small>Team Member<br/>
                                <b>Anjalee Gunathilaka</b></small>
                                </div>
                        </div>

                        
                </div>

            </div>
	    {/*<Scroll />*/}
            <Footer />
        </div>);
    }
}
 
export default TeamsPage;