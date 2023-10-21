import Image, { ImageProps } from 'next/image';
import React from 'react';
import classes from './ResponsiveImage.module.css';

type Props = ImageProps & {
  aspectRatio?: number;
};

export const ResponsiveImage: React.FC<Props> = ({
  width,
  height,
  aspectRatio,
  ...props
}) => {
  if (
    typeof props.src !== 'string' &&
    'width' in props.src &&
    'height' in props.src &&
    typeof props.src.width === 'number' &&
    typeof props.src.height === 'number' &&
    !aspectRatio
  ) {
    aspectRatio = props.src.width / props.src.height;
  }
  console.log(aspectRatio);

  return (
    <div
      className={classes.wrapper}
      style={{
        width: '100%',
        maxWidth: width,
        height: height,
        paddingBottom: aspectRatio ? `${(1 / aspectRatio) * 100}%` : undefined,
      }}
    >
      <Image {...props} alt={props.alt} fill={true} />
    </div>
  );
};
