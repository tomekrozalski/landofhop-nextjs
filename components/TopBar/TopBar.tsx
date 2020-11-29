import Header from './Header';
import LoginBar from './LoginBar';
import NavBar from './NavBar';

const TopBar: React.FC = () => (
  <>
    <NavBar />
    <LoginBar />
    <Header />
  </>
);

export default TopBar;
