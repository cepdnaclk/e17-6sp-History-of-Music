import React, { Component } from "react";

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
            <a className="navbar-logo" to="/" onClick={()=>this.closeMenu(1)} style={{width:'390px',height:'100%'}}>
              <img src="./img/logo_1.png" alt=""/>
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
                  href="/"
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
                <a
                  href="/"
                  className={
                    this.props.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(2)}
                >
                  ABOUT
                </a>
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
                  href="https://projects.ce.pdn.ac.lk/"
                  
                  className="button"
                  onClick={() => this.closeMenu(4)}
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
