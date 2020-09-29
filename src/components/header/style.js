import { whiteText, primaryGreen, primaryRed, blackText } from "../../styles";

export const HeaderStyles = {
  backgroundColor: `${primaryGreen}`,
};

export const LinkGroupOneStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "16px",
  color: `${whiteText}`,
  textAlign: "right",
};

export const LinkGroupListStyles = {
  display: "inline-block",
  padding: "10px 0px",
};

export const LinkGroupAnchorStyles = {
  display: "inline-block",
  color: `${whiteText}`,
  textDecoration: "none",
  padding: "0px 8px",
  borderRight: `1px solid ${whiteText}`,
};

export const LinkGroupAnchorLastStyles = {
  borderRight: "0",
};

export const ListGroupTwoStyles = {
  backgroundColor: `${primaryRed}`,
  padding: "20px 20px 16px",
};

export const MainMenuStyles = {
  display: "block",
  height: "100%",
};

export const MainMenuLinkStyles = {
  position: "relative",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "20px",
  color: `${whiteText}`,
  textTransform: "uppercase",
  padding: "9px 14px",
  marginTop: "10px",
};

export const SubMenuStyles = {
  display: "none",
  position: "absolute",
  width: "225px",
  backgroundColor: `${whiteText}`,
  zIndex: "1",
  top: "38px",
  left: "0",
};

export const SubMenuListStyles = {
  display: "block",
};

export const SubMenuListAnchorStyles = {
  display: "block",
  fontSize: "16px",
  lineHeight: "16px",
  color: `${blackText}`,
  padding: "12px",
  textTransform: "Capitalize",
  textDecoration: "none",
  wordSpacing: "normal",
};

export const MainMenuRightListStyles = {
  display: "inline-block",
};
