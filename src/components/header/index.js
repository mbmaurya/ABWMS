import React from "react";

import { HeaderStyles } from "./style";

import LinkGroupFirst from "./linkgroupfirst";
import LinkGroupSecond from "./linkgroupsecond";
import LinkGroupThird from "./linkgroupthird";
import TextBand from "./textband";

function Header() {
  return (
    <header className="header header-desktop" style={HeaderStyles}>
      <div className="container">
        <LinkGroupFirst />
        <LinkGroupSecond />
        <LinkGroupThird />
      </div>
      <TextBand />
    </header>
  );
}

export default Header;
