import { UserMenu } from './UserMenu';
import { Navigation } from './Navigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Div, Link, Header } from './AppBar.styled';


export default function AppBar() {
  const getIsLoggedIn = state => state.auth.isLoggedIn;
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Header>
        <h1>Phonebook</h1>
        <Div>
          <Link to="/">Home</Link>
          <div>{!isLoggedIn ? <Navigation /> : <UserMenu />}</div>
        </Div>
      </Header>
      <Outlet />
    </>
  );
}
