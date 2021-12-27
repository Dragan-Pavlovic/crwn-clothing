import { useSelector } from "react-redux";
import {
  selectCollectionIsLoading,
  selectCollections,
} from "../../Store/collections-slice/collectionsSelectors";
import CollectionPreview from "../collection-preview/CollectionPreview";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import classes from "./CollectionOverview.module.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollections);
  const isLoading = useSelector(selectCollectionIsLoading);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  let items = [];
  if (collections) {
    for (let key of Object.keys(collections)) {
      items.push(
        <CollectionPreview key={collections[key].id} {...collections[key]} />
      );
    }
  }

  return <div className={classes["collection-overview"]}>{items}</div>;
};

export default CollectionOverview;
