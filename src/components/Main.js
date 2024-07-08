import { manageList } from '../manageList';
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
       {manageList.map((manage) => (
          <Manage title={manage.title} text={manage.text} num={manage.num} key={manage.num} />
        ))}
      </div>
    </main>
  );
}
