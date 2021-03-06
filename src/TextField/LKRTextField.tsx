import React, {FunctionComponent} from "react";
import "./TextField.scss";
import { TextField } from '@material-ui/core';

interface InputProps {
    label: string;
    onChange: (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

const LKRTextField: FunctionComponent<InputProps> = ({ label, className, onChange }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            onChange={onChange}
            className={`lkrTextField ${className || ""}`}
        />
    )
}

export default LKRTextField;