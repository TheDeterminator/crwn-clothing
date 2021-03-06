import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...{ item }} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
