import React, {useState} from "react";
import DropDownIcon from "../../assets/images/transaction/dropdown.png"

const LabelStyles = {
    fontSize: "18px",
    lineHeight: 1,
    color: "rgb(108, 113, 116)",
    position: "relative"
}

const SelectBoxStyles = {
    cursor: "pointer",
    height: "45px",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "normal",
    border: "1px solid rgb(194, 194, 194)",
    padding: "10px"
}

const DropdownIconStyles = {
    position: "absolute",
    right: "20px"
}

const OptionContainerStyles = {
    position: "absolute",
    width: `calc(100% - 30px)`,
    border: "1px solid rgb(194, 194, 194)",
    zIndex: 1,
    maxHeight: "250px",
    overflow: "scroll"
}

const OptionStyles = {
    cursor: "pointer",
    width: "100%",
    display: "block",
    backgroundColor: "#ffffff",
    padding: "10px",
    fontSize: "18px",
    lineHeight: "22px",
    zIndex: 1
}

function SelectMenu({options, optionType}) {
    const [displayOptions, setDisplayOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const toggleOptions = () => {
        setDisplayOptions(!displayOptions)
    }
    const changeSelectedOption = (e) => {
        setSelectedOption(e.target.innerHTML);
        setDisplayOptions(!displayOptions)
    }
    // const options = ["Savings", "Current", "Demat"];
    return (
        <React.Fragment>
            <label style={LabelStyles}>{optionType}</label>
            <div onClick={toggleOptions} style={SelectBoxStyles}>
                {selectedOption}
                <img style={DropdownIconStyles} src={DropDownIcon} />
                
            </div>
            {displayOptions ?
                <div style={OptionContainerStyles}>
                    {options.map(value => (
                        selectedOption === value ?
                            <a className="option-styles selected" style={OptionStyles} onClick={changeSelectedOption}>{value}</a>
                            : <a className="option-styles" style={OptionStyles} onClick={changeSelectedOption}>{value}</a>
                    ))}
                </div>
                : null}
        </React.Fragment>
    )
}

export default SelectMenu;