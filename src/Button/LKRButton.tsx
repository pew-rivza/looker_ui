import React, {FunctionComponent, ReactNode} from "react";
// @ts-ignore
import asd from "../assets/images/authButton.svg";
import "./Button.scss";

interface InputProps {
    value: ReactNode;
    onCLick: (e?: React.MouseEvent<HTMLElement>) => void;
    className?: string;
}

const LKRButton: FunctionComponent<InputProps> = ({ value, className, onCLick }) => {
    return (
        <div className={`lkrButton ${className || ""}`}>
            <button
                onClick={onCLick}
            >
                { value }
            </button>
            <img src={asd} />
        </div>
    )
}

export default LKRButton;
