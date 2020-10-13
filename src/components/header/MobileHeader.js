import React, { Component } from "react";
import "./mobileheader.css";
import Cookies from "universal-cookie";
import abwmpreloginmenu from "./JSON/preloginmenu.json";
import abwmpostloginmenu from "./JSON/postloginmenu.json";

const cookies = new Cookies();

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      showiteam: "",
      showMobileHeader: false,
      postlogin: false,
      userEmailDetails: cookies.get("userEmailDetails"),
      abwmMenu: [],
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

  componentWillMount() {
    // handles mouse events like click and dblclick
    document.addEventListener("mouseup", this.handleMouseEvent);
    if (typeof this.state.userEmailDetails === "undefined") {
      this.setState({ postlogin: false, abwmMenu: abwmpreloginmenu });
    } else {
      this.setState({ postlogin: true, abwmMenu: abwmpostloginmenu });
    }
  }

  render() {
    const myArray1 = this.state.abwmMenu;
    const newArray1 = myArray1.map((abwm, i) => {
      return (
        <li
          key={i}
          className={`dropdown ${this.state.showiteam === "i" ? "open" : null}`}
          onClick={(e) => this.menuclick(e, i)}
        >
          <a
            className="dropdown-toggle"
            aria-expanded="false"
            onClick={() => (window.location.href = `${abwm.url}`)}
          >
            {abwm.mainHeading} <i className="fa fa-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            {abwm["children"].map((number, j) => {
              return (
                <li key={j}>
                  <a onClick={() => (window.location.href = `${number.url}`)}>
                    {number.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
    return (
      <div className="mobile_header open">
        <div className="nav_header">
          <div className="nav_title_inner">
            <a
              onClick={() =>
                (window.location.href =
                  "https://mywealth.adityabirlacapital.com/")
              }
            >
              Wealth Management{" "}
            </a>
          </div>
          <div className="close_menu" onClick={this.props.closeMyuniMenu}>
            {" "}
          </div>
        </div>
        <div className="side_navigation">
          <div className="main_menu">
            <ul>{newArray1}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileHeader;
