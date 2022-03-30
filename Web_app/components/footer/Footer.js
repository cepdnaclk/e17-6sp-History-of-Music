import React, { Component } from "react"
import styles from './Footer.module.css'
import Link from "next/link"
import Image from "next/image"

class Footer extends Component {
  render() {
    return (
      <>
      
      <div className={styles.container}>
        <div className="container text-center pb-0">
        <div className="row my-0">
          <div className="col-12 col-md-6 col-lg-3">
            <div variant="flush" className={`${styles["footer-links"]}`}>
              <div className="row">
              <h4>Contact us</h4>
              </div>
              <div className="row">
                <Link href="">
                  <a>Telephone : 076 34 55 356</a>
                </Link>
              </div>
              <div className="row">
                <Link href="mailto:e17012@ce.pdn.ac.lk" target="_blank">
                  <a>Email us</a>
                </Link>
              </div>
              
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            
          </div>
          <div className="col-12 col-md-12 col-lg-3 text-center">
          <div className={`${styles["footer-follow"]}`}>
              <div className="row d-flex justify-center text-center">
                <h4 className="d-flex text-center w-100">Follow Us On</h4>
              </div>
              <div className="row">
                <div className="col-4">
                  <a
                    href=""
 			target="_blank"
                    className={`${styles["follow-fb"]}`}
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href=""  target="_blank"
                    className={`${styles["follow-yt"]}`}
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-4">
                  <a href=""  target="_blank" className={`${styles["follow-li"]}`}>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </>
    )
  }
}

export default Footer;
