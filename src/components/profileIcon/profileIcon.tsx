import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconUserCircle, IconHelpCircle, IconLogout } from '@tabler/icons-react';
import styles from './profileIcon.module.css';
import routes from '../../constants/routes.json'

interface Props {
  firstName: string;
  lastName: string;
};

export const ProfileIcon: React.FC<Props> = (props: Props): JSX.Element => {
  const { firstName, lastName } = props;
  const initials = `${firstName.charAt(0).toLocaleUpperCase()}${lastName.charAt(0).toLocaleUpperCase()}`;
  const history = useHistory();

  const [active, setActive] = React.useState<'open' | 'closed'>('closed');

  const closeOverlay = () => setActive('closed');
  const profileButtonStyle = active === 'open' ? styles.activeProfileBtn : styles.profileButton;

  React.useEffect(() => {
    window.removeEventListener('click', closeOverlay);
    if (active === 'open') {
      window.addEventListener('click', closeOverlay);
    }
    return () => window.removeEventListener('click', closeOverlay);
  }, [active]);


  return (
    <div className={styles.profile}>
      <button type="button" className={profileButtonStyle} onClick={(e) => {setActive('open')}}>
        {initials}
      </button>
      {
        active === 'open' && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div onClick={(event) => event.stopPropagation()} className={styles.profileOverlay}>
            <button type="button" onClick={() => {history.push(routes.PROFLE); closeOverlay();}}>
              <IconUserCircle />
              My Profile
            </button>
            <button type="button" onClick={() => {history.push(routes.HELP); closeOverlay()}}>
              <IconHelpCircle />
              Help
            </button>
            <button type="button" onClick={() => {history.push(routes.LOGIN); closeOverlay()}}>
              <IconLogout />
              Logout
            </button>
          </div>
        )
      }
    </div>
  );
};