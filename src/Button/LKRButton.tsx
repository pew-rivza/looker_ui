import React, {FunctionComponent, ReactNode} from "react";
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
        </div>
    )
}

export default LKRButton;