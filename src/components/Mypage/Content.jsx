import React from "react";
import ContentItem from "./ContentItem";

const Content = ({ mypageContent }) => {
  const mypageItems = mypageContent.mypageItems;

  return (
    <div className="mt-12">
      <h2 className="text-sm text-gray-400">{mypageContent.title}</h2>
      <ul className="relative font-bold">
        {mypageItems.map((mypageItem) => {
          return (
            <>
              <ContentItem
                item={mypageItem.item}
                selectedItem={
                  mypageItem.selectedItem ? mypageItem.selectedItem : null
                }
                path={mypageItem.path}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
