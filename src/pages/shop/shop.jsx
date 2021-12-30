import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import Collection from "../Collection/Collection";
import { useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";
import { collectionsActions } from "../../Store/collections-slice/collectionsSlice";

let initial = true;
export default function Shop() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  useEffect(() => {
    if (initial) {
      dispatch(collectionsActions.fetchCollectionsStarts());
      initial = false;
    }
  }, [dispatch]);
  return (
    <div>
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`} exact>
        <Collection />
      </Route>
    </div>
  );
}
