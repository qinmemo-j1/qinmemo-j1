import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ContentItem = ({ item, selectedItem, path }) => (
  <>
    <li>
      <span>{item}</span>
      <span>{selectedItem ? <span>{selectedItem}</span> : null}</span>
      <Link href={path}>
        <ChevronRightIcon className="w-6 h-12 text-gray-300" />
      </Link>
    </li>
  </>
);

export default ContentItem;
