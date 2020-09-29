import React from "react";
import {
  LinkGroupOneStyles,
  LinkGroupListStyles,
  LinkGroupAnchorStyles,
  LinkGroupAnchorLastStyles,
} from "./style";

function LinkGroupsFirst() {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="links-grp-1" style={LinkGroupOneStyles}>
          <li style={LinkGroupListStyles}>
            <a
              style={LinkGroupAnchorStyles}
              href="https://www.adityabirlacapital.com/corporate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Corporates
            </a>
          </li>
          <li style={LinkGroupListStyles}>
            <a
              style={LinkGroupAnchorStyles}
              href="https://www.adityabirlacapital.com/advisors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advisors
            </a>
          </li>
          <li style={LinkGroupListStyles}>
            <a
              style={LinkGroupAnchorStyles}
              href="https://www.adityabirlacapital.com/customer-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Services
            </a>
          </li>
          <li style={LinkGroupListStyles}>
            <a
              style={LinkGroupAnchorStyles}
              href="https://www.adityabirlacapital.com/about-us/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </a>
          </li>
          <li style={LinkGroupListStyles}>
            <a
              style={{
                ...LinkGroupAnchorStyles,
                ...LinkGroupAnchorLastStyles,
              }}
              href="https://www.adityabirlacapital.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinkGroupsFirst;
