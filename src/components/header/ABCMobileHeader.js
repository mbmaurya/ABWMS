import React, { Component } from "react";
import "./abcmobileheader.css";
import Cookies from "universal-cookie";
import abcmenu from "./JSON/abcmenu.json";

const cookies = new Cookies();

class ABCMobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      showiteam: "",
      showMobileHeader: false,
      postlogin: false,
      userEmailDetails: cookies.get("userEmailDetails"),
      abcMenu: [],
      othersToggle: false,
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

  otherLinks = () => {
    this.setState({ othersToggle: !this.state.othersToggle });
  };
  componentDidMount() {
    // handles mouse events like click and dblclick

    if (typeof this.state.userEmailDetails === "undefined") {
      this.setState({ postlogin: false, abcMenu: abcmenu });
    } else {
      this.setState({ postlogin: true, abcMenu: abcmenu });
    }
  }
  render() {
    const myArray = this.state.abcMenu;
    const newArray = myArray.map((menu, i) => {
      console.log(menu);
      return (
        <li className="clearfix marginBT" key={i}>
          <a href="menu.url">
            <h3 className="protectingHd">{menu.mainHeading}</h3>
          </a>
          <ul className="inner_pifa_menu">
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

    return (
      <div className="abc_mobile_header open">
        <div className="overflow_class">
          <div className="abc_nav_header">
            <div className="logo"></div>
            <div className="close_menu" onClick={this.props.closeHeaderMenu}>
              {" "}
            </div>
            <div className="mobile_icons">
              <span className="marrgt5">
                <a href="https://www.adityabirlacapital.com/" target="_blank">
                  <i className="home_icon_big"></i>
                </a>
              </span>
              <span className="marrgt5">
                <a href="tel:18002707000">
                  <i className="phone_icon_big"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="pifa_menu">
            <ul>{newArray}</ul>
          </div>
          <div className="top_pifa_menu">
            <ul className="">
              <li>
                <a href="https://www.adityabirlacapital.com/corporate">
                  Corporates
                </a>
              </li>
              <li>
                <a href="https://www.adityabirlacapital.com/advisors">
                  Advisors
                </a>
              </li>
              <li>
                <a href="https://www.adityabirlacapital.com/customer-services">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="https://www.adityabirlacapital.com/about-us/careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.adityabirlacapital.com/about-us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="top_pifa_menu">
            <ul className="">
              <li>
                <a onClick={this.otherLinks}>
                  Others <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <ul
                className={`${
                  this.state.othersToggle === true ? "othersToggle" : "hide"
                }`}
              >
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/our-solutions">
                    Our Solutions
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/our-businesses">
                    Our Business
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/financial-achievements">
                    Our Achievements
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/csr-and-sustainability">
                    CSR
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/investor-relations">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/Press-and-Media">
                    Press and Media
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/branch-locator">
                    Locate Us
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/Key-Facts-On-Tax-Filing">
                    ITR Filing
                  </a>
                </li>
              </ul>
              <li>
                <a href="https://www.adityabirlacapital.com/Privacy-Policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.adityabirlacapital.com/Terms-and-Conditions">
                  Terms and Conditions
                </a>
              </li>
            </ul>
            <ul>
              <li className="mob-footer">
                &copy;2019, Aditya Birla Capital Inc. All Rights Reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ABCMobileHeader;
