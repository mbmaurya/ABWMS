import {useState, useEffect} from 'react'
import bannerImg from "../assets/images/landing-page/banner.jpg";
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
  ...box,
  padding: 51,
  width: "100%",
  borderBottom: `1px solid ${accentYellow}`,
};

export const formBoxMobile = {
  ...formBox,
  padding: 22
}

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
  cursor: 'pointer'
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


export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}



// HOME

export const banner = {
  backgroundImage: `url(${bannerImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: `425px`,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  position: "relative",
  zIndex: -1,
};

export const heading = {
  color: "#fff",
  fontSize: "60px",
};

export const bigCard = {
  display: "grid",
  gridTemplateRows: "30% 80%",
  gridTemplateColumns: "repeat(3,1fr)",
  padding: "50px 80px",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 10px 35px 0 rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fffffb",
  borderRadius: 0,
  marginTop: "-40px",
  // zIndex: 2,
};

export const bigCardHeading = {
  margin: "auto",
  gridColumn: "1/-1",
};

export const bigCardButton = {
  margin: "auto 0 auto auto",
};

export const currentPrice = {
  gridRow: "2/3",
  margin: "auto auto auto 0",
};
export const buyIn = {
  margin: "auto",
};

export const bigCardInput = {
  border: `1px solid ${lightGrey}`,
  borderRadius: "2px",
  padding: "5px 20px",
  width: "100%",
  fontSize: "24px",
  fontWeight: 500,
};

export const prizeBorder = {
  border: `1px solid ${lightGrey}`,
  padding: "2px 15px",
  color: greenText,
  fontSize: "13px",
  fontWeight: "bold",
  cursor: "pointer",
};

export const cardItemWhite = {
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "20% 60%",
  gridTemplateRows: "40% 60%",
  gridRowGap: "12px",
  boxShadow: `0px 10px 35px 0 rgba(0, 0, 0, 0.1)`,
  margin: "0 auto",
  border: 'none',
  borderRadius: 0
};
export const cardItem = {
  display: "grid",
  gridRowGap: "12px",
  gridTemplateColumns: "20% 60%",
  gridTemplateRows: "40% 60%",
  border: "none",
  margin: "0 auto 20px 0",
  backgroundColor: "transparent",
};

export const CardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(400px,1fr))",
  gridGap: "50px",
};

export const cardItem2 = {
  display: "flex",
  flexDirection: "column",
  boxShadow: `0px 10px 35px 0 rgba(0, 0, 0, 0.1)`,
  padding: 30,
  marginRight: 30,
};


// GOLD TRANSACTIONS
export const transactionContainer = {
  ...formContainer,
  marginTop: 50,
  marginBottom: 60,
  maxWidth: 1051,
  alignItems: 'unset'
}

export const stepsDiv = {
  marginTop: 43
}

export const stepsListItem = {
  marginBottom: 32,
  display: 'flex',
  alignItems: 'center',
  fontSize: 18,
  color: greyText,
  position: 'relative',
}

export const listIcon = {
  marginRight: 12,
  height: 32,
  width: 32,
  backgroundColor: accentYellow,
  borderRadius: 100,
}

export const transactionBox = {
  ...box,
  height: 519, 
  minHeight: 519,
  maxWidth: 491,
  marginTop: -30, 
  marginLeft: 'auto',
  padding: '30px 30px 40px 30px'
}

export const goldRateBox = {
  marginTop: 5,
  padding: '2px 22px',
  backgroundColor: '#f1f1f1',
  borderRadius: 3
}

export const goldRatePara = {
  fontSize: 21,
  color: greyText
}

export const goldRateSpan = {
  fontSize: 28,
  color: blackText
}

export const table = {
  fontSize: 18,
  color: greyText
}

export const tdRight = {
  textAlign: 'right',
  color: blackText
}

export const tfoot = {
  backgroundColor: darkGreen,
  color: whiteText
}
export const tfootright = {
  textAlign: 'right',
  fontSize: 20
}