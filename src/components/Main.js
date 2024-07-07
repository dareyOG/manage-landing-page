import { manage } from '../manageList';
import { Manage } from './Manage';

export function Main() {
  return (
    <main className="main">
      <div>
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
