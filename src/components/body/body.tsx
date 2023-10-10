import React from 'react';
import styles from './body.module.css'

interface Props {
  className?: string;
  children: React.ReactNode;
};

export const Body: React.FC<Props> = (props: Props): JSX.Element => {
  const { className, children } = props;
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Body.defaultProps = {
  className: '',
}