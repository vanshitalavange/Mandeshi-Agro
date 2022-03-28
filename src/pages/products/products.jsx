import "./products.css";
import { Filters } from "../../components/filters/Filters";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useFilters } from "../../contexts/product-context";
import { getFilteredProducts } from "../../utilities/sorting-functions";
import { useAxios } from "../../utilities/useAxios";
export function Products() {
  const { filterState } = useFilters();
    let products=[];
    const {loading, responseData, errorFlag} = useAxios("/api/products");
    if(!loading && !errorFlag){
        products = [...responseData.products]
    }
  const filteredProducts = getFilteredProducts(products, filterState);
  return (
    <div class="products-page-main">
      <Filters />
      <section class="products">
        { loading ? <h3>Loading...</h3> : errorFlag ? <h3>Something's coming undone</h3> : 
        filteredProducts.length === 0 ? (
          <h1>No Products Found</h1>
        ) : (
          filteredProducts.map((product) => {
            return <ProductCard product={product} />;
          })
        )}
      </section>
    </div>
  );
}
