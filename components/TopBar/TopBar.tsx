import dynamic from 'next/dynamic';

import Header from './Header';
import NavBar from './NavBar';

const LoginBar = dynamic(() => import('./LoginBar'), { ssr: false });

const TopBar: React.FC = () => (
  <>
    <NavBar />
    <LoginBar />
    <Header />
  </>
);

export default TopBar;
