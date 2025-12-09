interface ButtonProps {
    // The 'children' prop is special in React. It's whatever is inside the component tags.
    children: React.ReactNode;
    // We can add other optional props, like an onClick handler
    onClick?: () => void;
    // We can also allow it to be disabled
    disabled?: boolean;
    classes?: string;
    // And let's set the button type, which is good practice for forms
    type?: 'button' | 'submit' | 'reset';
}

function Button({ children, onClick, disabled = false, type = 'button', classes, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // --- UPDATED className (مُحسّن لمنع الوميض) ---
      className={`
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
        ease-out
        will-change-transform
        backface-hidden
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        disabled:hover:shadow-none
        hover:bg-primary/70
        focus:outline-none
        focus:ring-2
        focus:ring-accent
        focus:ring-opacity-50
        ${classes || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;