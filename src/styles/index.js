export const blackText = "#000000";
export const darkGrey = "#444749";
export const lightGrey = "#dddddd";
export const greyText = "#6c7174";
export const greenText = "#3e593c";
export const redText = "";
export const whiteText = "#FFFFFF";
export const primaryGreen = "#979f6f";
export const darkGreen = "#3e593c";
export const primaryRed = "#c7222a";
export const accentYellow = "#f7a500";

// BOX
export const box = {
  boxShadow: "0px 10px 35px 0 rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fffffb",
  borderRadius: 3,
};

export const formBox = {
  padding: 51,
  width: "100%",
  borderBottom: `1px solid ${accentYellow}`,
};

export const boxTitle = {
  fontFamily: `PFHandbookPro-medium, "san-serif"`,
  marginBottom: 28,
  fontSize: 21,
  fontWeight: 500,
  letterSpacing: "2.63px",
  lineHeight: 1,
  color: greenText,
  textTransform: "uppercase",
};

// step elipse
export const steps = {
  marginLeft: "auto",
  marginBottom: 14,
  display: "flex",
  flexDirection: "row",
};
export const stepElipse = {
  padding: 0,
  marginLeft: 10,
  height: 13,
  width: 13,
  borderRadius: "100%",
  backgroundColor: accentYellow,
  border: "none",
};

// form container
export const formContainer = {
  marginTop: 80,
  marginBottom: 100,
  maxWidth: 916,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
// form
export const formLabel = {
  fontSize: 18,
  lineHeight: 1,
  color: greyText,
};

export const formInput = {
  height: 45,
  fontSize: 18,
  fontWeight: "normal",
  border: "1px solid #c2c2c2",
  borderRadius: 3,
};

export const inputError = {
  color: primaryRed,
};

// Dropzone
export const dropzone = {
  padding: "27px 40px 28px 21px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: whiteText,
  border: `1px dashed ${greenText}`,
  boxShadow: "0px 3px 14.6px 0.5px rgba(0, 0, 0, 0.1)",
  borderRadius: 3,
};

export const dropzoneMobile = {
  ...dropzone,
  flexDirection: "column",
};

export const dropzonePara = {
  fontSize: 18,
  fontWeight: "normal",
  letterSpacing: "0.18px",
  color: greyText,
};

export const dropzoneSpan = {
  color: greenText,
  textDecoration: "underline",
  cursor: "pointer",
};

export const dropzoneBtn = {
  width: 120,
  height: 40,
  fontSize: 18,
  fontWeight: "bold",
  color: greenText,
  borderRadius: 3,
  border: `solid 1px ${greenText}`,
  backgroundColor: whiteText,
};

export const dropzoneHint = {
  marginTop: 12,
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: 1,
  color: greyText,
};

// BTN
export const buttonGroup = {
  marginTop: 28,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

export const btn = {
  height: 50,
  width: 150,
  fontSize: 24,
  color: whiteText,
  backgroundColor: greenText,
  border: "none",
  borderRadius: 2,
};
export const clearBtn = {
  padding: 0,
  lineHeight: 1,
  fontSize: 21,
  color: greenText,
  backgroundColor: "transparent",
  border: "none",
};

// bank detail
export const bankDetail = {
  ...formInput,
  padding: "17px 11px",
  display: "flex",
  alignItems: "center",
};

export const addBankLink = {
  fontSize: 18,
  fontWeight: 500,
  color: greenText,
  textDecoration: "underline",
  cursor: "pointer",
};

// FOOTER
export const footerSectionOne = {
  padding: 20,
  backgroundColor: "#201E19",
  color: "#A1A2A2",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.1,
};
export const footerSectionTwo = {
  padding: 20,
  backgroundColor: "#6C7174",
};

export const footerHr = {
  borderTop: `1px solid ${whiteText}`,
};

export const footerbase = {
  color: whiteText,
};
