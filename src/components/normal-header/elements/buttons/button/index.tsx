import Link from 'next/link';

import styles from './styles.module.css';

type ButtonProps = {
  type: 'button' | 'submit';
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  backgroundColor?: string;
};
type LinkProps = {
  type: 'link';
  value: string;
  href: string;
  target?: '_blank';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  color?: string;
  backgroundColor?: string;
};

type Props = ButtonProps | LinkProps;

export const Button = (props: Props) => {
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
  };

  if (props.type === 'link') {
    return (
      <Link
        className={styles.root}
        href={props.href}
        target={props.target}
        rel={props.target ? 'noopener noreferrer' : undefined}
        onClick={props.onClick}
        style={buttonStyle}
      >
        {props.value}
      </Link>
    );
  }

  return (
    <button type={props.type} className={styles.root} onClick={props.onClick} style={buttonStyle}>
      {props.value}
    </button>
  );
};
