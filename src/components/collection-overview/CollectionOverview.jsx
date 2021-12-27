import { useSelector } from "react-redux";
import { selectCollectons } from "../../Store/collections-slice/collectionsSelectors";
import CollectionPreview from "../collection-preview/CollectionPreview";
import classes from "./CollectionOverview.module.scss";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectons);
  console.log("rerender");
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
