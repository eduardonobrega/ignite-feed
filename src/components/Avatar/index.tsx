import { ImgHTMLAttributes } from 'react';

import stiles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? stiles.avatarWithBorder : stiles.avatar}
      {...props}
    />
  );
}
