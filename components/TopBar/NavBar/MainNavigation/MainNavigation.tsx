import React from 'react';

// import Authorization from './Authorization';
import ListOfLinks from './ListOfLinks';
import styles from './MainNavigation.module.css';

const MainNavigation: React.FC = () => (
  <div className={styles.mainNavigation}>
    {/* <Authorization /> */}
    <ListOfLinks />
  </div>
);

export default MainNavigation;
