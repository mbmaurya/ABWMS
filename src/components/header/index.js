import React from "react";

import { HeaderStyles } from "./style";

import LinkGroupFirst from "./linkgroupfirst";
import LinkGroupSecond from "./linkgroupsecond";
import LinkGroupThird from "./linkgroupthird";
import TextBand from "./textband";
import MobileLinkGroupFirst from "./mobilemenu/mobilelinkgroupfirst";

function Header() {
  return (
    <div>
      <header className="header header-desktop" style={HeaderStyles}>
        <div className="container">
          <LinkGroupFirst />
          <LinkGroupSecond />
          <LinkGroupThird />
        </div>
        <TextBand />
      </header>

      <header className="header header-mobile">
        <MobileLinkGroupFirst />
      </header>
    </div>
  );
}

export default Header;
