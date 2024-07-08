import { useState } from 'react';
import { NavBar } from './NavBar';
import { Nav } from './Nav';
import { Header } from './Header';
import { Main } from './Main';
import { TestimonialList } from './TestimonialList';
import { Simplify } from './Simplify';
import { Footer } from './Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen}>
        <Nav />
      </NavBar>
      <Header />
      <Main />
      <TestimonialList />
      <Simplify />
      <Footer />
    </>
  );
}
