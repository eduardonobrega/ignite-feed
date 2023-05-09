import { Avatar } from '../Avatar';
import stiles from './styles.module.css';

export function Profile(props) {
  return (
    <div className={stiles.profile + ` ${props.className}`}>
      <Avatar src={props.avatar} hasBorder />
      <div>
        <strong>{props.name}</strong>

        <span>{props.occupation}</span>
      </div>
    </div>
  );
}
