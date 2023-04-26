import stiles from './styles.module.css';

export function Profile(props) {
  return (
    <div className={stiles.profile + ` ${props.className}`}>
      <img
        className={stiles.avatar}
        src={props.avatar}
      />

      <div>
        <strong>{props.name}</strong>

        <span>{props.occupation}</span>
      </div>
    </div>
  );
}
