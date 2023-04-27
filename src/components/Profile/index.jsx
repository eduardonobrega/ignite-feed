import { Avatar } from '../Avatar';
import stiles from './styles.module.css';

export function Profile(props) {
  return (
    <div className={stiles.profile + ` ${props.className}`}>
      <Avatar src="https://github.com/eduardonobrega.png" hasBorder />
      <div>
        <strong>{props.name}</strong>

        <span>{props.occupation}</span>
      </div>
    </div>
  );
}
