import React, { Component } from "react"
import Link from "next/link"

class NavBar extends Component {
  state = {
    click: true,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true});
  };


  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <a className="navbar-logo" to="/" onClick={()=>this.closeMenu(1)} style={{width:'590px',height:'100%'}}>
              <img src="./img/audio-waves.png" alt="" style={{width:'90px',height:'100%', marginLeft:'20px',marginRight:'20px'}} />
              <h2 style={{color:'white'}}>History of Music</h2>
            </a>
            <div className="menu-icon" onClick={this.handleMenu}>
              <label for="" className="menu-btn">

              <i
                className={this.state.click ? "fas fa-bars" : "fas fa-times"}
              >
              </i>

              </label>
              


            </div>
            <ul className={!this.state.click ? "nav-menu active" : "nav-menu"}>


              <li className="nav-item">
                <a
                  href="#home"
                  className={
                    this.props.page_no == 1
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(1)}
                >
                  HOME
                </a>
              </li>


              <li className="nav-item">
              <Link href="#about">
                <a
                  
                  className={
                    this.props.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(2)}
                >
                  ABOUT
                </a>
              </Link>
              </li>


              <li className="nav-item">
                <a
                  href="/blog"
                  className={
                    this.props.page_no == 3
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(3)}
                >
                  GENRES
                </a>
              </li>



              <li className="nav-item">
                <a
                  href="/teams"
                  className={
                    this.props.page_no == 4
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(4)}
                >
                  TEAM
                </a>
              </li>

              

              



              <li className="nav-item">
                <a
                  href="#analyzer"
                  
                  className="button"
                  onClick={() => this.closeMenu(5)}
                >
                  Analyze Music
                </a>
              </li>
            
              

             



            </ul>

           

           
          
          </div>

          

        </nav>
      </>
    );
  }
}
export default NavBar;
