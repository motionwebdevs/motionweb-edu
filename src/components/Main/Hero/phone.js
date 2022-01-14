import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const M = () => {
    return (
        <div>
            <PhoneInput
                country={"kg"}
                value="+996"
                onChange={phone => console.log({ phone })}
            />
        </div>
    );
};
export default M;