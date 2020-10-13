import React, { Component } from "react";
import "./footer.css";
import Cookies from "universal-cookie";
import abwmpreloginmenu from "../header/JSON/preloginmenu.json";
import abwmpostloginmenu from "../header/JSON/postloginmenu.json";

const cookies = new Cookies();

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postlogin: false,
      userEmailDetails: cookies.get("userEmailDetails"),
      abwmMenu: [],
    };
  }
  componentWillMount() {
    // handles mouse events like click and dblclick
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
        <div className="links" key={i}>
          <h4>
            {abwm.mainHeading} <span className="arrow-m"></span>
          </h4>
          <ul>
            {abwm["children"].map((number, j) => {
              return (
                <li key={j}>
                  <a href={number.url}>{number.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });

    return (
      <footer id="login_footer">
        <div className="footer_top">
          <div className="container pad0_mob">
            <div className="row mar0_mob">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padd0-640 padleft0">
                {/* {newArray1} */}
                <div className="links">
                  <h4>
                    Mutual Funds <span className="arrow-m"></span>
                  </h4>
                  <ul>
                    <li>
                      <a href="https://mywealth.adityabirlacapital.com/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="https://mywealth.adityabirlacapital.com/registration/sign-in">
                        Open Investment Account
                      </a>
                    </li>

                    <li>
                      <a href="https://mywealth.adityabirlacapital.com/mf-transaction/Category">
                        Explore Solutions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="links">
                  <h4>
                    Wealth Management <span className="arrow-m"></span>
                  </h4>
                  <ul>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management/Alternative-Investments">
                        Alternate Investment Funds
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management">
                        Mutual Funds
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management/structured-Products">
                        Structured Products
                      </a>
                    </li>
                    {/* <li><a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management/estate-planning">Estate Planning</a></li> */}
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management/portfolio-management-service">
                        Portfolio Managements Service
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management/bonds">
                        Bonds
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="links">
                  <h4>
                    Corporate &amp; Treasury Services{" "}
                    <span className="arrow-m"></span>
                  </h4>
                  <ul>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services/liquidity-management-solutions">
                        Liquidity Management Solutions
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services/traditional-investment-solutions">
                        Traditional Investment Solutions
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services/group-insurance-schemes">
                        Group Insurance Scheme
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services/financing-support-solutions">
                        Support Solutions
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services/alternate-solutions">
                        Alternate Solutions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="links" style={{ width: "12%" }}>
                  <h4>
                    Real Estate <span className="arrow-m"></span>
                  </h4>
                  <ul>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/real-estate-advisory/our-edge">
                        {" "}
                        Our Edge
                      </a>
                    </li>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/our-solutions/real-estate-advisory/our-services">
                        Our Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="links" style={{ width: "17%" }}>
                  <h4>
                    Other Links <span className="arrow-m"></span>
                  </h4>
                  <ul>
                    <li>
                      <a href="https://wealthmanagement.adityabirlacapital.com/MF-Commission-Disclosure">
                        {" "}
                        MF Commission Disclosure
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="line hide-640"></div> */}
          {/* <div className="container hide-640 ">
                        <p className="footer_mf_text">Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance of the schemes is neither an indicator nor a guarantee of future performance.<br/ > For detailed disclaimer kindly click on <a href="https://www.myuniverse.in/legal-disclaimer">more details</a></p>
                    </div> */}
        </div>
        <div className="footer_gray">
          <div className="container">
            <div className="row mar0">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0 padleft0">
                <div className="footer_bottom">
                  <div className="footerlinks">
                    <div className="logobx">
                      <a
                        className="footer_logo"
                        href="https://adityabirlacapital.com/"
                      >
                        <img
                          src={require("./images/footer_logo.png")}
                          alt="Footer Logo"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="fmenulink">
                      <div className="bottom_link">
                        <ul>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/about-us/our-solutions"
                              target=""
                              title="Our Solutions"
                            >
                              <span>Our Solutions</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/investor-relations"
                              target=""
                              title="Investor Relations"
                            >
                              <span>Investor Relations</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/press-and-media"
                              target=""
                              title="Press and Media"
                            >
                              <span>Press and Media</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="fmenulink">
                      <div className="bottom_link">
                        <ul>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/about-us/our-businesses"
                              target=""
                              title="Our Businesses"
                            >
                              <span>Our Businesses</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/about-us/financial-achievements"
                              target=""
                              title="Our Achievements"
                            >
                              <span>Our Achievements</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.adityabirlacapital.com/about-us/csr-and-sustainability "
                              target=""
                              title="CSR"
                            >
                              <span>CSR</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="fmenulink">
                      <div className="bottom_link">
                        <ul>
                          <li>
                            <a href="https://www.adityabirlacapital.com/branch-locator">
                              <span>Locate Us</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/home/privacy-policy"
                              target=""
                              title="Privacy Policy"
                            >
                              <span>Privacy Policy</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://adityabirlacapital.com/home/terms-and-conditions"
                              target=""
                              title="Terms and Conditions"
                            >
                              <span>Terms and Conditions</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_section">
            <div className="copyright">
              <p>© 2019, Aditya Birla Capital Inc. All Rights Reserved.</p>
            </div>
            <div className="bottom_social">
              <div className="contacttext">
                {/* <p className="caption">Call us directly: </p> */}
                {/* <span className="abcicons icon-icon-phone iconspan"></span> */}
                <p className="caption">
                  {" "}
                  {/* <a href="tel:1800-270-7000" className="tel_phone">
                    1800-270-7000
                  </a> */}
                  Write to us on:&nbsp;
                  <a
                    href="mailto:care.wealthmanagement@adityabirlacapital.com"
                    className="tel_phone"
                  >
                    care.wealthmanagement@adityabirlacapital.com
                  </a>
                </p>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/AdityaBirlaCapital/?ref=bookmarks"
                    data-toggle="tooltip"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adityabirlacapital/?hl=en"
                    data-toggle="tooltip"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/abcapital">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCSki2tX_5kadIdz3m8Q4Fvg/featured?disable_polymer=1">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
