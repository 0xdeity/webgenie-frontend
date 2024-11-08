import React, { useState } from "react";
import { Icon } from "../../../assests/images/constant";
import "./style.scss";
import { ButtonField, InputField } from "../../../CommonComponent";
import { RiAttachment2 } from "react-icons/ri";
const DetailContainer = ({ setSearchText, handleGenerateButton}) => {
    const [isFocus, setIsFocus] = useState(false)

  return (
    <>
      <div className="headerLogoStyle">
        Web&nbsp;
        <img src={Icon.logo} alt="logo style" />
        enie
      </div>

      <div className="subHeaderText">Your Design-to-Code Genie</div>

      <div className="subHeading">
        Upload any landing page design and watch WebGenie transform it into
        clean, responsive HTML & CSS in seconds
      </div>
      <div style={{width: "80%", display: "flex" , justifyContent: "center"}}>
      <InputField
        placeholder="Describe your landing page"
        styleBox={isFocus ? "inputstylefocus" : "inputstyle"}
        prefix={<RiAttachment2 />}
        onChange={(event) => setSearchText(event.target.value)}
        />

      </div>
      <ButtonField
            text="Generate"
            buttonStyle={ "button_Style"}
            icon={<img src={Icon.star} alt="playground" />}
            iconPosition={"start"}
            onClick={handleGenerateButton}
            onFocus={() => setIsFocus(!isFocus)}
            isFocus={isFocus}
          />
    </>
  );
};

export default DetailContainer;
