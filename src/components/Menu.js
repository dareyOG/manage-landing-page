import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import { Modal } from './Modal';

export function Menu({ isOpen, setIsOpen }) {
  const handleMenu = () => setIsOpen((open) => !open);
  return (
    <>
      <div className="menu" onClick={handleMenu}>
        {!isOpen ? (
          <img src={hamburger} alt="nav" className="hamburger" />
        ) : (
          <img src={close} alt="nav" className="close" />
        )}
      </div>
      <button className="btn btn--primary">Get Started</button>
      {isOpen && <Modal />}
    </>
  );
}
