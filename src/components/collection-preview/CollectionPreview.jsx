import CollectionItem from "../collection-item/CollectionItem";
import classes from "./CollectionPreview.module.scss";

export default function CollectionPreview({ title, items }) {
  const formatedTitle = title.toUpperCase();

  return (
    <div className={classes["collection-preview"]}>
      <h1 className={classes.title}>{formatedTitle}</h1>
      <div className={classes.preview}>
        {items.slice(0, 4).map(({ id, ...rest }) => {
          console.log("mapping");
          return <CollectionItem key={id} {...rest} />;
        })}
      </div>
    </div>
  );
}
