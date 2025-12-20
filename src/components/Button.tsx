import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    classes?: string;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    to?: string; // New prop for link navigation
    href?: string; // For external links
    target?: string; // For link target
    rel?: string; // For link rel attribute
}

function Button({ 
    children, 
    onClick, 
    disabled = false, 
    type = 'button', 
    classes, 
    fullWidth = false,
    to,
    href,
    target,
    rel,
    ...props 
}: ButtonProps) {
    // Base button classes
    const baseClasses = `
        relative
        bg-primary
        text-secondary
        text-base
        font-bold
        py-3.5
        px-4
        rounded
        dm-sans-font
        transform
        transition-colors
        duration-200
        hover:bg-primary/90
        focus:outline-none
        focus:ring-2
        focus:ring-primary/50
        ${fullWidth ? 'w-full' : ''}
        ${classes || ''}
    `;

    // If it's a React Router link
    if (to) {
        return (
            <Link
                onClick={onClick}
                to={to}
                className={`${baseClasses} inline-flex items-center justify-center`}
                target={target}
                rel={rel}
                {...props}
            >
                {children}
            </Link>
        );
    }

    // If it's an external link
    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} inline-flex items-center justify-center`}
                target={target}
                rel={rel || 'noopener noreferrer'}
                {...props}
            >
                {children}
            </a>
        );
    }

    // Default button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={baseClasses}
            {...props}
        >
            {children}
        </button>
    );
}
export default Button;
