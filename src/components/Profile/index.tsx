import { Avatar } from '../Avatar';
import stiles from './styles.module.css';

interface ProfileProps {
  avatar: string;
  className?: string;
  name: string;
  occupation: string;
}

export function Profile({ avatar, className, name, occupation }: ProfileProps) {
  return (
    <div className={stiles.profile + ` ${className}`}>
      <Avatar src={avatar} hasBorder />
      <div>
        <strong>{name}</strong>

        <span>{occupation}</span>
      </div>
    </div>
  );
}
