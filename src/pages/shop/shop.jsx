import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import Collection from "../Collection/Collection";
import { useEffect, useState } from "react";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { collectionsActions } from "../../Store/collections-slice/collectionsSlice";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOwerviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot((snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(collectionsActions.updateCollections(collectionMap));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div>
      <Route exact path={`${match.path}`}>
        <CollectionOwerviewWithSpinner isLoading={isLoading} />
      </Route>
      <Route path={`${match.path}/:collectionId`} exact>
        <CollectionWithSpinner isLoading={isLoading} />
      </Route>
    </div>
  );
}
