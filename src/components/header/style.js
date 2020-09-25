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
  padding: "20px",
};

export const MainMenuStyles = {
  display: "flex",
  height: "100%",
  alignItems: "flex-end",
};

export const MainMenuLinkStyles = {
  position: "relative",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "20px",
  color: `${whiteText}`,
  textTransform: "uppercase",
  padding: "12px 16px",
};

export const SubMenuStyles = {
  position: "absolute",
  width: "225px",
  backgroundColor: `${whiteText}`,
  zIndex: "1",
  top: "40px",
  left: "0",
};

export const SubMenuListStyles = {
  //   padding: "12px",
};

export const SubMenuListAnchorStyles = {
  display: "block",
  fontSize: "16px",
  lineHeight: "16px",
  color: `${blackText}`,
  padding: "12px",
  textTransform: "Capitalize",
  textDecoration: "none",
};
