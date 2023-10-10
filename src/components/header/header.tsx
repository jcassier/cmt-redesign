import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logo.svg';
import styles from './header.module.css';
import { ProfileIcon } from '../profileIcon/profileIcon';
import routes from '../../constants/routes.json'

interface Props {
  chapterName?: string;
}

export const Header: React.FC<Props> = (props: Props): JSX.Element => {
  const { chapterName } = props;
  const history = useHistory();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <button type="button" onClick={() => {history.push(routes.HOME)}}>
          <img src={logo} alt="logo" className={styles.logo} />
        </button>
        <p>for {chapterName}</p>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/chapter/psi-gamma")}}>
            Chapter
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
         <button type="button" onClick={() => {history.push("/psi-gamma/members")}}>
            Members
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/psi-gamma/pledging")}}>
            Pledging
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/psi-gamma/annual-report")}}>
            Annual Report
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/psi-gamma/finances")}}>
            Finances
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/psi-gamma/trainings")}}>
            Trainings
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push("/region/northwest")}}>
            Northwest Region
          </button>
          <hr />
        </div>
        <div className={styles.navBtn}>
          <button type="button" onClick={() => {history.push(routes.NAT_OFF)}}>
            Nat Off
          </button>
          <hr />
        </div>
      </div>
        <ProfileIcon firstName='Jean-Marc' lastName='Cassier' />
    </div>
  );
};

Header.defaultProps = {
  chapterName: 'Theta Tau Fraternity',
}