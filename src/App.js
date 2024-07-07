import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TestimonialList } from './components/TestimonialList';
import { Simplify } from './components/Simplify';
import { Footer } from './components/Footer';

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
