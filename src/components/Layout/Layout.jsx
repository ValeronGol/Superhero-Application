import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

export default function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/list">Superhero List</CustomLink>
        <CustomLink to="/form">Superhero Create</CustomLink>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
