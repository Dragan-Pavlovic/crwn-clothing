import CollectionItem from "../collection-item/CollectionItem";
import classes from "./CollectionPreview.module.scss";

export default function CollectionPreview({ title, items, all }) {
  const formatedTitle = title.toUpperCase();
  const listItems = all ? items.length : 4;
  return (
    <div className={classes["collection-preview"]}>
      <h1 className={classes.title}>{formatedTitle}</h1>
      <div className={classes.preview}>
        {items.slice(0, listItems).map(({ id, ...rest }) => {
          return <CollectionItem key={id} id={id} {...rest} />;
        })}
      </div>
    </div>
  );
}
