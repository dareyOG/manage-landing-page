export function Manage({ title, num, text }) {
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
