import Link from 'next/link';
import styles from './styles.module.css';

type ButtonProps = {
  type: 'button' | 'submit';
  value: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  backgroundColor?: string;
  className?: string;
};
type LinkProps = {
  type: 'link';
  value: string;
  href: string;
  target?: '_blank';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

// MEMO: type の値によって受け取る props が変わる
type Props = ButtonProps | LinkProps;

export const Button = (props: Props) => {
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  if (props.type === 'link') {
    return (
      <Link
        className={`${styles.root} ${props.className}`}
        href={props.href}
        target={props.target}
        rel={props.target}
        onClick={props.onClick}
        style={buttonStyle}
      >
        {props.value}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      className={`${styles.root} ${props.className}`}
      onClick={props.onClick}
      disabled={props.isDisabled}
      style={buttonStyle}
    >
      {props.value}
    </button>
  );
};
