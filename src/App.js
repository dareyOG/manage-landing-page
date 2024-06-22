import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';
import logoFooter from './images/logo--footer.svg';

import illustration from './images/illustration-intro.svg';

import { manage } from './manage';
import { testimonials } from './testimonials';

import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen}>
        <Logo />
        <Nav />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavBar>
      <Header />
      <Main />
      <Testimonials />
      <Simplify />
      <Footer />
    </>
  );
}

function NavBar({ isOpen, children }) {
  return (
    <nav className={`navBar ${isOpen ? 'navBar--fixed' : ''}`}>
      {/* <Logo /> */}
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
      </ul>
    </nav>
  );
}

function Menu({ isOpen, setIsOpen }) {
  const handleMenu = () => setIsOpen((open) => !open);
  return (
    <>
      <div className="menu" onClick={handleMenu}>
        {!isOpen ? <img src={hamburger} alt="nav" /> : <img src={close} alt="nav" />}
        <button className="btn btn--primary">Get Started</button>
      </div>
      {isOpen && <Modal />}
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={illustration} alt="illustration" />
      <div className="header-content">
        <div className="header-text">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </p>
        </div>
        <button className="btn btn--primary">Get Started</button>
      </div>
    </header>
  );
}

function Modal() {
  return (
    <section className="overlay">
      <ul className="modal">
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
      </ul>
    </section>
  );
}

function Main() {
  return (
    <main className="main">
      <div className="main__head">
        <h2>What’s different about Manage?</h2>
        <p>
          {' '}
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.{' '}
        </p>
      </div>
      <div>
        {manage.map((el) => (
          <Manage title={el.title} text={el.text} num={el.num} key={el.num} />
        ))}
      </div>
    </main>
  );
}

function Manage({ title, num, text }) {
  return (
    <ul className="manage">
      <li className="title">
        <span className="num">{num <= 9 ? `0${num}` : num}</span>
        {title}
      </li>
      <p className="text">{text}</p>
    </ul>
  );
}

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSetActiveTestimonial = (num) => setActiveTestimonial(num);

  return (
    <section className="testimonials">
      <h2 className="testimonial__header">What they've said </h2>
      <div>
        {testimonials.map((testimonial, i) => (
          <Testimonial
            avatar={testimonial.avatar}
            author={testimonial.author}
            testimonial={testimonial.testimonial}
            key={testimonial.author}
            num={i}
            activeTestimonial={activeTestimonial}
          />
        ))}
      </div>
      <div class="dots-container">
        {Array.from({ length: testimonials.length }, (_, i) => (
          <Dot
            key={i}
            num={i}
            handleSetActiveTestimonial={handleSetActiveTestimonial}
            activeTestimonial={activeTestimonial}
          />
        ))}
      </div>
      <button className="btn btn--primary">Get Started</button>
    </section>
  );
}

function Testimonial({ avatar, author, testimonial, num, activeTestimonial }) {
  return (
    <div
      className={`testimonial-content  ${
        activeTestimonial === num ? 'testimonial-content--active' : ''
      }`}
    >
      <img src={avatar} alt={`${author}`} className="testimonial-content__photo" />
      <h3>{author}</h3>
      <blockquote className="testimonial-content__text">{testimonial}</blockquote>
    </div>
  );
}

function Dot({ num, activeTestimonial, handleSetActiveTestimonial }) {
  return (
    <div
      className={`dot ${activeTestimonial === num ? 'dot--active' : ''}`}
      onClick={() => handleSetActiveTestimonial(num)}
    ></div>
  );
}

function Simplify() {
  return (
    <aside className="simplify">
      <h2>Simplify how your team works today.</h2>
      <button className="btn btn--secondary">Get Started</button>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>
        <input
          className="footer__input"
          type="email"
          placeholder="Updates in your inbox..."
          required
        />

        <button className="btn btn__footer">Go</button>
      </span>
      <div className="footer__nav">
        <div>
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#products">Products</a>
          <a href="#aboutUs">About Us</a>
        </div>
        <div>
          <a href="#careers">Careers</a>
          <a href="#community">Community</a>
          <a href="#privacyPolicy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-youtube" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-twitter" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-pinterest" size="large"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logoFooter} alt="logo" />{' '}
      </div>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
}
