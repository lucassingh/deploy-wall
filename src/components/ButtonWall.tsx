import React from 'react';

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary';
    type?: 'normal' | 'outline';
    size?: 'large' | 'medium' | 'small';
    text?: string;
    typeButtonForm: 'button' | 'submit' | 'reset';
    id?: string;
    clickHandler: () => void;
    disabled?: boolean;
    href?: string;
}

const ButtonWall: React.FC<ButtonProps> = ({
    color = 'primary',
    type = 'normal',
    size = 'medium',
    text = 'Click me',
    typeButtonForm,
    id,
    clickHandler,
    disabled,
    href
}) => {

    if (href) {
        return (
            <button
                className={`btn ${color} ${type} ${size}`}
                disabled={disabled}
                type={typeButtonForm}
                id={id}
            >
                <a href={href} target='_blank' className="btn-link">
                    {text}
                </a>
            </button>
        );
    }

    return (
        <button
            className={`btn ${color} ${type} ${size}`}
            onClick={clickHandler}
            disabled={disabled}
            type={typeButtonForm}
            id={id}
        >
            {text}
        </button>
    );
};

export default ButtonWall;