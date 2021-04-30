import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...restProps }) => {
      return <CollectionPreview key={id} {...restProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(ShopPage);
