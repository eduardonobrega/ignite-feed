import stiles from './styles.module.css';

export function Avatar({ src, hasBorder = false }) {
  return (
    <img
      className={hasBorder ? stiles.avatarWithBorder : stiles.avatar}
      src={src}
    />
  );
}
