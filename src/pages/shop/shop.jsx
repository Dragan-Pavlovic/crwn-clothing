import { useState } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./shop.data";

export default function Shop() {
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div>
      {shopData.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
}
