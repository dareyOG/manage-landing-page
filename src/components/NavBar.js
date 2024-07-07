import { Menu } from './Menu';
import { Logo } from './Logo';

export function NavBar({ isOpen, setIsOpen, children }) {
  return (
    <nav className={`navBar ${isOpen ? 'navBar--fixed' : ''}`}>
      <Logo />
      {children}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
