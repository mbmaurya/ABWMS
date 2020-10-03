import { blackText, greenText, whiteText, greyText } from "../../../styles";

export const UserNameStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "24px",
  lineHeight: "28px",
  color: `${greenText}`,
  letterSpacing: "1px",
  marginBottom: "15px",
};

export const BlockTitleStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "36px",
  lineHeight: "40px",
  color: `${blackText}`,
  letterSpacing: "1px",
};

export const DashboadrCardStyles = {
  width: "97%",
  height: "auto",
  backgroundColor: `${whiteText}`,
  boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.1)",
  marginBottom: "20px",
};

export const DashboardCardElementStyles = {
  display: "inline-block",
  width: "50%",
  paddingTop: "20px",
};

export const DashboardCardElementTitleStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
  marginBottom: "5px",
};

export const DashboardCardElementContentStyles = {
  display: "inline-block",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "32px",
  lineHeight: "35px",
  color: `${greyText}`,
};

export const Growth = {
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: "7px",
  borderLeft: "12px solid transparent",
  borderRight: "12px solid transparent",
  borderBottom: `12px solid ${greenText}`,
};
