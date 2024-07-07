import illustration from '../images/illustration-intro.svg';

export function Header() {
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
