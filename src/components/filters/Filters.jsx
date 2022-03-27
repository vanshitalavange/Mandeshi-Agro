import { useState, useEffect } from "react";
import "./Filters.css";
import { useProduct } from "../../contexts/product-context";

export const Filters = () => {
  const {state:filterState,dispatch:dispatchFilters} = useProduct();
  const {lowToHigh,highToLow,categoryState,priceRange} = filterState;
  /** state used to toggle between responsive filter and normal filter **/
  const [filtersClassName, setFiltersClassName] = useState(
    "filters-wrapper flex-column"
  );
  const checkDeviceWidth = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth <= 897) {
      setFiltersClassName("hide-filters");
    } else {
      setFiltersClassName("filters-wrapper flex-column");
    }
  };
  useEffect(() => window.addEventListener("resize", checkDeviceWidth), []);
  const showFilters = () => {
    setFiltersClassName(
      filtersClassName ===
        "filters-wrapper filters-wrapper-responsive flex-column"
        ? "hide-filters"
        : "filters-wrapper filters-wrapper-responsive flex-column"
    );
  };

  return (
    <section className="filters">
      <div className="responsive-filters flex-row">
        Sort by filters
        <button onClick={() => showFilters()}>
          <span class="material-icons arrow-drop-down">arrow_drop_down</span>
        </button>
      </div>
      <div className={filtersClassName}>
        <div className="filters-header flex-row justify-space-between">
          <div className="filters-title-wrapper flex-row">
            <i className="fa fa-filter align-center"></i>
            <h3>Filters</h3>
          </div>
          <button onClick={() => dispatchFilters({type:"CLEAR_ALL"})} className="align-end filters-clear-all">Clear all</button>
        </div>
        <div className="filters-body flex-column">
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">PRICE</h4>
            <label for="price-range">
              <span>₹5 - ₹{priceRange}</span>
            </label>
            <input onChange={(event)=>dispatchFilters({type:"PRICE_RANGE",payload:event.target.value})} min="5" max="1575" type="range" value={priceRange} className="price-range" />
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">SORT BY</h4>
            <div className="form-group-input-control flex-row">
              <input
                onChange={() => dispatchFilters({type:"LOW_TO_HIGH",payload:true})}
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-low-to-high"
                checked={lowToHigh}
              />
              <label for="sort-by-low-to-high">Price - Low to high</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
               onChange={() => dispatchFilters({type:"HIGH_TO_LOW",payload:true})}
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-high-to-low"
                checked={highToLow}
              />
              <label for="sort-by-high-to-low">Price - high to low</label>
            </div>
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">CATEGORY</h4>
            <div className="form-group-input-control flex-row">
              <input
                onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicFruits"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-fruits"
                checked={categoryState.organicFruits}
              />
              <label for="category-fruits">Organic Fruits</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
               onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicDairy"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-dairy-products"
                checked={categoryState.organicDairy}
              />
              <label for="category-dairy-products">
                Organic Diary Products
              </label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
              onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicOils"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-oils"
                checked={categoryState.organicOils}
              />
              <label for="category-oils">Wood Pressed Oils</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicSpices"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-spices"
                checked={categoryState.organicSpices}
              />
              <label for="category-spices">Organic Spices</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
              onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicVegetables"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-vegetables"
                checked={categoryState.organicVegetables}
              />
              <label for="category-vegetables">Organic Vegetables</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
              onChange={() => dispatchFilters({type:"CATEGORY",payload:"organicGroceries"})}
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-groceries"
                checked={categoryState.organicGroceries}
              />
              <label for="category-groceries">Organic Groceries</label>
            </div>
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">RATINGS</h4>
            <div className="form-group-input-control flex-row">
              <input
                onChange={()=>dispatchFilters({type:"RATING",payload:4})}
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="four-stars-and-above"
              />
              <label for="four-stars-and-above">4 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                 onChange={()=>dispatchFilters({type:"RATING",payload:3})}
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="three-stars-and-above"
              />
              <label for="three-stars-and-above">3 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
               onChange={()=>dispatchFilters({type:"RATING",payload:2})}
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="two-stars-and-above"
              />
              <label for="two-stars-and-above">2 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
               onChange={()=>dispatchFilters({type:"RATING",payload:1})}
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="one-star-and-above"
              />
              <label for="one-star-and-above">1 star & above</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
