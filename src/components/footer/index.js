import React from "react";
import { footerbase, footerHr, footerSectionOne, footerSectionTwo } from "../../styles/styles";
import footerImg from '../../assets/footer/footer-logo.svg';

function Footer() {
  return (
    <footer>
      <section className="footer-section-one" style={footerSectionOne}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-12">
              <p>Wealth Management</p>
              <ul>
                <li>
                  <a href="#">Alternate Investment Funds</a>
                </li>
                <li>
                  <a href="#">Mutual Funds</a>
                </li>
                <li>
                  <a href="#">Structued Products</a>
                </li>
                <li>
                  <a href="#">Portfolio Managements Service</a>
                </li>
                <li>
                  <a href="#">Bonds</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12 mt-md-0 mt-3">
              <p>Corporate & treasury Services</p>
              <ul>
                <li>
                  <a href="#">Liquidity Management Solutions</a>
                </li>
                <li>
                  <a href="#">Traditional Investment Solutions</a>
                </li>
                <li>
                  <a href="#">Group Insurance Scheme</a>
                </li>
                <li>
                  <a href="#">Support Solutions</a>
                </li>
                <li>
                  <a href="#">Alternate Solutions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12 mt-md-0 mt-3">
              <p>Real Estate</p>
              <ul>
                <li>
                  <a href="#">Our Edge</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12 mt-md-0 mt-3">
              <p>Other Links</p>
              <ul>
                <li>
                  <a href="#">MF Commission Disclsoure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section-two" style={footerSectionTwo}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-12">
              <img
                src={footerImg}
                alt="Aditya Birla Capital"
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-12 mt-md-0 mt-3">
              <ul>
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/our-solutions">
                    Our Solutions
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/investor-relations">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/press-and-media   ">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-12">
              <ul>
                <li>
                  <a href="https://www.adityabirlacapital.com/about-us/our-businesses">
                    Our Businesses
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
              </ul>
            </div>

            <div className="col-md-2 col-12">
              <ul>
                <li>
                  <a href="https://www.adityabirlacapital.com/branch-locator">
                    Locate Us
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.adityabirlacapital.com/terms-and-conditions">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={footerHr} />
        <div className="footer-base" style={footerbase}>
          <div className="row">
            <div className="col-md-7 col-12">
              <p>©2019, Aditya Birla Capital Ltd. All Rights Reserved.</p>
            </div>
            <div className="col-md-5 col-12 mt-md-0 mt-3">
              <div className="row">
                <div className="col-md-7">
                  <p>
                    Call us directly:
                    <a href="tel:1800-270-7000"> 1800-270-7000</a>
                  </p>
                </div>
                <div className="col-md-5 social-icons mt-md-0 mt-3">
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
