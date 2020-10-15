import React, { useState } from "react";
import {
  btn,
  banner,
  heading,
  bigCard,
  bigCardHeading,
  bigCardButton,
  currentPrice,
  CardContainer,
  bannerImageText,
} from "../../styles/index";
import { Link } from "react-router-dom";

import CardItemWhite from "./components/CardItemWhite";
import CardItem from "./components/CardItem";
import Card2Item from "./components/Card2Item";
import BuyIcon from "../../assets/images/landing-page/buy-export-as-gold.svg";
import ReedeemIcon from "../../assets/images/landing-page/redeem-gold.svg";
import GetDeliverIcon from "../../assets/images/landing-page/get-deliver.svg";
import TrasnferIcon from "../../assets/images/landing-page/transfer.svg";
import ConvenientIcon from "../../assets/images/landing-page/convenient.svg";
import GTIcon from "../../assets/images/landing-page/good-and-transparent-price.svg";
import SafeLockerIcon from "../../assets/images/landing-page/safe-locker.svg";
import PurityIcon from "../../assets/images/landing-page/purity-guranteed.svg";
import BuyIn from "./components/BuyIn";
import TimeLeft from "../global/TimeLeft";

const Home = () => {
  const [goldRate, setGoldRate] = useState(5375.38);
  const rate = new Intl.NumberFormat("en-IN").format(goldRate);
  return (
    <main>
      {/* First Fold */}

      <div className="banner" style={banner}>
        <div className="container heading" style={heading}>
          <h1>
            Buy &amp; Sell Digital Gold <br /> Online Instantly
          </h1>
          <button className="btn heading-button" style={btn}>
            Buy Now
            <span className="btn-icon">
              <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <p className="bannerSmallText">
          Rishi Jain & Shivna Jain / Newly Married, Corporate Professional
        </p>
      </div>

      {/* Buy Gold Online */}

      <div className="bigCard container " style={bigCard}>
        <h2 className="main-title" style={bigCardHeading}>
          Buy Gold Online
        </h2>
        <div className="currentPriceContainer" style={currentPrice}>
          <h5 className="mb-4 subtitle">Current price/gm incl of GST</h5>
          <h3 className="mb-2 currentPrice">
            <span className="currentPrice-small">₹</span>
            {rate}
            <span className="currentPrice-small">/gm</span>
          </h3>
          <p style={{ color: "#6c7174" }}>
            24k, 99.99% Pure
            <br />
            <TimeLeft />
          </p>
        </div>
        <BuyIn component="homepage" goldRate={goldRate} />
        <div className="bigCardButton" style={bigCardButton}>
          <Link
            to="/gold-transactions"
            className="btn"
            style={btn}
            onClick={() => console.log("fouhgi")}
          >
            Buy Now
          </Link>
        </div>
      </div>

      {/* How it works */}

      <section style={{ margin: "80px 0" }}>
        <h2 className="text-center main-title">Here's how it works</h2>
        <div className="container cardContainer" style={CardContainer}>
          <CardItemWhite
            icon={BuyIcon}
            title="Buy / Invest in Gold"
            content="Buy Gold without visiting to any jewellers at the convenience of your home, store in a secure vault or get it delivered home at your convenience"
          />
          <CardItemWhite
            icon={ReedeemIcon}
            title="Redeem Gold"
            content="Buy Gold without visiting to any jewellers at the convenience of your home, store in a secure vault or get it delivered home at your convenience"
          />
          <CardItemWhite
            icon={GetDeliverIcon}
            title="Get Deliver"
            content="Buy Gold without visiting to any jewellers at the convenience of your home, store in a secure vault or get it delivered home at your convenience"
          />
          <CardItemWhite
            icon={TrasnferIcon}
            title="Transfer"
            content="Buy Gold without visiting to any jewellers at the convenience of your home, store in a secure vault or get it delivered home at your convenience"
          />
        </div>
      </section>

      {/* Benefits of Digital Gold */}

      <section style={{ margin: "80px 0", backgroundColor: "#EBEBEB" }}>
        <div className="d-flex benefitsMob justify-content-between container py-5">
          <div className="benefits">
            <h2 className="main-title-benfits">Benefits of Digital Gold</h2>
            <p className="font-weight-bold" style={{ fontSize: "18px" }}>
              Buy Gold without visiting to any jewellers at the convenience of
              <br /> your home, store in a secure vault or get it delivered home
              at
              <br /> your convenience
            </p>
          </div>

          <div className="benefits">
            <CardItem
              icon={ConvenientIcon}
              title="Convenient"
              content="It is convenient to get gold online. As you are not required
to visit to a jeweler. It takes time and effort to purchase physical gold."
            />
            <CardItem
              icon={GTIcon}
              title="Good and Transparent Price"
              content="The price of gold at ABWM would be competitive. As promised it would be wholesale rate of the bullion market. The price would be constantly updated. You can compare the price of gold with the price of bullion market."
            />
            <CardItem
              icon={SafeLockerIcon}
              title="Safe Locker"
              content="It is safer to keep gold in Brinks Locker as The gold is insured there. However, at the bank locker, it is not insured.e"
            />
            <CardItem
              icon={PurityIcon}
              title="Purity Guaranteed"
              content="The gold would be 24 carat pure. There is no chance of impurities. We know that often our neighbourhood jewelers give us impure gold. The SafeGold and ABWM would not risk their reputation by selling impure gold."
            />
          </div>
        </div>
      </section>

      {/* Everything you need to know */}

      <section style={{ margin: "80px 0" }}>
        <div className="container">
          <h2 className="text-center main-title">
            Everything you need to know
          </h2>
          <div className="d-flex card2ContainerMob">
            <Card2Item
              title="About SafeGold"
              content="SafeGold is a product of Digital Gold India. This company focusses on using technology to improve transparency and efficiency in buying gold. The SafeGold immediately buys gold for the customer as soon as it receives the order. It issues an invoice with the rate and amount of gold and applicable taxes."
            />
            <Card2Item
              title="About Aditya Birla Wealth Management"
              content="SafeGold is a product of Digital Gold India. This company focusses on using technology to improve transparency and efficiency in buying gold. The SafeGold immediately buys gold for the customer as soon as it receives the order. It issues an invoice with the rate and amount of gold and applicable taxes."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
