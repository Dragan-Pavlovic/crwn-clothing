import { lazy, Suspense } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { collectionsActions } from "../../Store/collections-slice/collectionsSlice";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

const CollectionOverview = lazy(() =>
  import("../../components/collection-overview/CollectionOverview")
);
const Collection = lazy(() => import("../Collection/Collection"));

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
      <Suspense fallback={<LoadingSpinner />}>
        <Route exact path={`${match.path}`}>
          <CollectionOverview />
        </Route>
        <Route path={`${match.path}/:collectionId`} exact>
          <Collection />
        </Route>
      </Suspense>
    </div>
  );
}
