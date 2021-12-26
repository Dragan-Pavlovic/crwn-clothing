import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollecton } from "../../Store/collections-slice/collectionsSelectors";
import classes from "./Collection.module.scss";

const Category = () => {
  const { collectionId } = useParams();
  const collectionSelector = selectCollecton(collectionId);
  const collection = useSelector(collectionSelector);
  const { title, items } = collection;
  return (
    <div className={classes["collection-page"]}>
      <h2 className={title}>{title}</h2>
      <div className={classes.items}>
        {items.map((item) => {
          const object = { ...item, styling: classes["collection-item"] };
          return <CollectionItem key={item.id} {...object} />;
        })}
      </div>
    </div>
  );
};

export default Category;
