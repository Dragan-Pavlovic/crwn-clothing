import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import {
  selectCollectionIsLoading,
  selectCollecton,
} from "../../Store/collections-slice/collectionsSelectors";
import classes from "./Collection.module.scss";

const Collection = () => {
  const { collectionId } = useParams();
  const collectionSelector = selectCollecton(collectionId);
  const collection = useSelector(collectionSelector);
  const isLoading = useSelector(selectCollectionIsLoading);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const title = collection?.title || collectionId;
  const items = collection?.items || [];

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

export default Collection;
