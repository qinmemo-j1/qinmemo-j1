import React from "react";
import ContentItem from "./ContentItem";

const Content = ({ mypageContent }) => {
  const mypageItems = mypageContent.mypageItems;

  return (
    <div>
      <h2>{mypageContent.title}</h2>
      <ul>
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
