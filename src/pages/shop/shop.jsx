import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import Collection from "../Collection/Collection";

export default function Shop() {
  const match = useRouteMatch();
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
