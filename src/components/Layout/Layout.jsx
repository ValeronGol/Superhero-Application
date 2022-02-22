import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

export default function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/superhero-application/">Home</CustomLink>
        <CustomLink to="/superhero-application/heros">
          Superhero List
        </CustomLink>
        <CustomLink to="/superhero-application/form">
          Superhero Create
        </CustomLink>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
