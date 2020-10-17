import React, { Component } from "react";
import "./header.css";
import MobileHeader from "./MobileHeader";
import ABCMobileHeader from "./ABCMobileHeader";
import Backdrop from "./Backdrop";
import Backdrop1 from "./Backdrop";
import Cookies from "universal-cookie";
import abcmenu from "./JSON/abcmenu.json";
import abwmpreloginmenu from "./JSON/preloginmenu.json";
import abwmpostloginmenu from "./JSON/postloginmenu.json";

const cookies = new Cookies();
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      showiteam: "",
      showMobileHeader: false,
      postlogin: false,
      userEmailDetails: cookies.get("userEmailDetails"),
      abcMenu: abcmenu,
      abwmMenu: abwmpostloginmenu,
      showABCMobileHeader: false,
    };
  }
  menuclick = (e, data) => {
    e.preventDefault();
    this.setState({ showiteam: data, listOpen: !this.state.listOpen }, () => {
      // document.addEventListener('click', this.closeMenu());
    });
  };

  closeMenu = () => {
    //alert();
    this.setState({ showiteam: "" }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  mobileHeaderHandler = () => {
    this.setState((prevState) => {
      return { showMobileHeader: !prevState.showMobileHeader };
    });
  };

  abcMobileHeader = () => {
    this.setState((prevState) => {
      return { showABCMobileHeader: !prevState.showABCMobileHeader };
    });
  };

  backdropShowHandler = () => {
    this.setState({ showMobileHeader: !this.state.showMobileHeader });
  };

  backdropABCShowHandler = () => {
    this.setState({ showABCMobileHeader: !this.state.showABCMobileHeader });
  };

  async componentWillMount() {
    const rawResponse = await fetch(
      window.location.protocol + "//" + window.location.host + "/mf/common",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ api_name: "CHECK_UUID" }),
      }
    );
    const responseJson = await rawResponse.json();
    console.log(responseJson.response.data.uuidExist, "will mount");
    if (responseJson.response.data.uuidExist === "No") {
      this.setState({
        postlogin: false,
        abwmMenu: abwmpreloginmenu,
        abcMenu: abcmenu,
      });
    } else {
      this.setState({
        postlogin: true,
        abwmMenu: abwmpostloginmenu,
        abcMenu: abcmenu,
      });
    }

    // handles mouse events like click and dblclick
    document.addEventListener("mouseup", this.handleMouseEvent);

    // Intentionally commented as it is not of use. START.
    // if(typeof(this.state.userEmailDetails) === 'undefined'){
    //     this.setState({postlogin:false,abwmMenu : abwmpreloginmenu, abcMenu : abcmenu})
    // }else{
    //     this.setState({postlogin:true,  abwmMenu: abwmpostloginmenu, abcMenu : abcmenu})
    // }
    // this.setState({

    // })
    // Intentionally commented as it is not of use. END.
  }

  // Intentionally commented as it is not of use. START.
  // componentDidMount(){
  //      if(this.state.postlogin){
  //         this.setState({

  //         })
  //     }
  // }
  // Intentionally commented as it is not of use. END.

  render() {
    const myArray = this.state.abcMenu;
    const newArray = myArray.map((menu, i) => {
      return (
        <li key={i}>
          <a href={menu.url}>
            {menu.mainHeading}
            <i className="fa fa-angle-down"></i>
          </a>
          <ul className="submenu">
            {menu["innerMenu"].map((number, j) => {
              return (
                <li className="normal_drp" key={j}>
                  <a href={number.url} target="_blank">
                    {number.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });

    const myArray1 = this.state.abwmMenu;
    const newArray1 = myArray1.map((abwm, i) => {
      return (
        <li className="dropdown" key={i}>
          <a href={abwm.url} className="dropdown-toggle" aria-expanded="false">
            {abwm.mainHeading} <i className="fa fa-angle-down"></i>
          </a>
          <ul className="dropdown-menu prelogin">
            {abwm["children"].map((number, j) => {
              return (
                <li key={j}>
                  <a href={number.url}>{number.label}</a>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });

    return (
      <React.Fragment>
        <marquee
          id="news"
          style={{ backgroundColor: "#fff", display: "bloc", width: "100%" }}
        >
          <div style={{ padding: "5px 0px" }}>
            <span
              style={{
                color: "rgb(197, 37, 48)",
                fontSize: "18px",
                fontFamily: "pf_handbook_ProRegular",
                color: "#000",
                padding: "0",
                margin: "0",
              }}
            >
              Please note temporary revised cut-off timings for Mutual Fund
              schemes as per RBI Press Release / SEBI circulation. For
              subscriptions in Liquid &amp; Overnight schemes – 12.30 pm. For
              all other schemes and transactions (including liquid redemptions /
              switch) – 1.00 pm. Effective from 7th April, 2020 till further
              notice. Dear Customer, for any issues on our new portal, please
              write to us at{" "}
              <a href="mailto:Care.WealthManagement@adityabirlacapital.com">
                Care.WealthManagement@adityabirlacapital.com
              </a>
              . We will be glad to assist you. - Team Aditya Birla Wealth
              Management
            </span>
          </div>
        </marquee>
        <div className="site_header">
          <div className="head_top">
            <div className="div_head">
              <div className="pull-right">
                <nav>
                  <ul className="top_nav_links">
                    <li>
                      <a
                        href="https://www.adityabirlacapital.com/corporate"
                        target="_blank"
                      >
                        Corporates
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.adityabirlacapital.com/advisors"
                        target="_blank"
                      >
                        Advisors
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.adityabirlacapital.com/customer-services"
                        target="_blank"
                      >
                        Customer Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.adityabirlacapital.com/about-us/careers"
                        target="_blank"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="divider-left">
                      <a
                        href="https://www.adityabirlacapital.com/about-us"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="header-desp">
            <div className="logo-container">
              <div className="logo"></div>
              <div className="abc_pifa">
                <ul>{newArray}</ul>
              </div>
              <div className="pifa_right pull-right">
                <span className="marrgt5">
                  <a href="tel:18002707000">
                    1800-270-7000 <i className="phone_icon"></i>
                  </a>
                </span>
                <span className="marrgt5">
                  <a href="https://www.adityabirlacapital.com/" target="_blank">
                    HOME <i className="home_icon"></i>
                  </a>
                </span>
              </div>
              <div className="pifa_right_mobile pull-right">
                <div className="user_icon1 mobile"></div>
                <div className="mobile_menu" onClick={this.abcMobileHeader}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="bottombar_active">
              <div className="nav_title">
                <a href="https://mywealth.adityabirlacapital.com/">
                  WEALTH MANAGEMENT
                </a>
              </div>
              <div className="nav_title1">
                <a onClick={this.mobileHeaderHandler}>
                  WEALTH MANAGEMENT <i className="fa fa-angle-down"></i>
                </a>
              </div>
              <div className="main_menu">
                <ul>{newArray1}</ul>
              </div>
              <div className="col-menu-right">
                <ul className="support-ul">
                  {this.state.postlogin === true ? (
                    <li className="cart support-li">
                      <a
                        href={
                          window.location.protocol +
                          "//" +
                          window.location.host +
                          "/mf-transaction/CartNew"
                        }
                      >
                        <i className="cart_icon"></i>
                      </a>
                    </li>
                  ) : null}
                  <li className="support-li">
                    {this.state.postlogin !== true ? (
                      <a
                        href={
                          window.location.protocol +
                          "//" +
                          window.location.host +
                          "/registration/sign-in"
                        }
                      >
                        Login{" "}
                        <img
                          src={require("../../assets/images/header/login.png")}
                          width="10px"
                          height="10px"
                          alt="Login"
                          className="user_icon"
                        />
                      </a>
                    ) : (
                      <a
                        href={
                          window.location.protocol +
                          "//" +
                          window.location.host +
                          "/registration/sign-out"
                        }
                      >
                        Logout
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="bottombar_dark_active">
              <p className="header-title">
                Aditya Birla Finance Limited
              </p>
            </div>

          {this.state.showMobileHeader ? (
            <MobileHeader closeMyuniMenu={this.backdropShowHandler} />
          ) : null}
          {this.state.showMobileHeader ? (
            <Backdrop click={this.backdropShowHandler} />
          ) : null}
          {this.state.showABCMobileHeader ? (
            <ABCMobileHeader closeHeaderMenu={this.backdropABCShowHandler} />
          ) : null}
          {this.state.showABCMobileHeader ? (
            <Backdrop1 click={this.backdropABCShowHandler} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default header;
