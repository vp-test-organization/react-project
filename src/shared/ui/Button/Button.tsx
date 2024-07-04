import { type ButtonHTMLAttributes, memo } from 'react';
import styles from './Button.module.scss';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
	CLEAR = 'btn--clear',
	OUTLINE = 'btn--outline',
	OUTLINE_INVERTED = 'btn--outline-inverted',
	THEME_INVERTED = 'btn--theme-inverted',
	BACKGROUND = 'btn--background',
	BACKGROUND_INVERTED = 'btn--background-inverted',
}

export enum ButtonSize {
	S = 'btn--small',
	M = 'btn--medium',
	L = 'btn--large',
	XL = 'btn--extra-large',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		type = 'button',
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;
	const mods: Mods = {
		[styles.btnSquare]: square,
		[styles[size]]: size,
	};

	return (
		<button
			type={type}
			className={classNames(styles.btn, mods, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
});

export default Button;
