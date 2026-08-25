import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    id?: string;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: 'sm' | 'lg';
}

const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer';

const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-base',
};

const variantStyles = {
    primary:
        'bg-linear-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 border border-indigo-400/30',
    secondary:
        'px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white',
};

const Button = ({
    children,
    id,
    variant = 'primary',
    href,
    onClick,
    className,
    size = 'sm',
}: ButtonProps) => {
    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClassName}
            >
                {children}
            </a>
        );
    }

    return (
        <button id={id} onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default Button;
