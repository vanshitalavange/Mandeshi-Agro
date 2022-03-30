import "./products.css";
import { Filters, ProductListing } from "../../components/index";
import { useFilters } from "../../contexts/index";
import { getFilteredProducts } from "../../utilities/sorting-functions";
import { useAxios } from "../../utilities/useAxios";
export function Products() {
  const { filterState } = useFilters();
  let products = [];
  const { loading, responseData, errorFlag } = useAxios("/api/products");
  if (!loading && !errorFlag) {
    products = [...responseData.products];
  }
  const filteredProducts = getFilteredProducts(products, filterState);
  return (
    <div className="products-page-main">
      <Filters />
      <ProductListing
        products={filteredProducts}
        loading={loading}
        errorFlag={errorFlag}
      />
    </div>
  );
}
