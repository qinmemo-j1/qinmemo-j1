import React from "react";
import Image from "next/image";
import type { VFC } from "react";

import NoProfileImage from "public/no-profile-image.webp";

type AvatarProps = {
  src?: string;
  alt?: string;
};

export const UserMenu: VFC<AvatarProps> = (props) => {
  const { src, alt } = props;
  return (
    <Image
      className="overflow-hidden rounded-full"
      src={src ? src : NoProfileImage}
      alt={alt}
    />
  );
};
