import { useState,useEffect } from "react";
import "./Filters.css";

export const Filters = () => {
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
          <button className="align-end filters-clear-all">Clear all</button>
        </div>
        <div className="filters-body flex-column">
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">PRICE</h4>
            <label for="price-range" className="flex-row justify-space-between">
              <span>₹5</span>
              <span>₹678</span>
              <span>₹1575</span>
            </label>
            <input onChange={(event) =>console.log(event.target.value)} min="5" max="1575" type="range" className="price-range" />
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">SORT BY</h4>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-popularity"
              />
              <label for="sort-by-popularity">Popularity</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-latest"
              />
              <label for="sort-by-latest">Latest</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-low-to-high"
              />
              <label for="sort-by-low-to-high">Price - Low to high</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="sort-by-filter-radio"
                className="input-control"
                id="sort-by-high-to-low"
              />
              <label for="sort-by-high-to-low">Price - high to low</label>
            </div>
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">CATEGORY</h4>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-fruits"
              />
              <label for="category-fruits">Organic Fruits</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-diary-products"
              />
              <label for="category-diary-products">
                Organic Diary Products
              </label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-oils"
              />
              <label for="category-oils">Wood Pressed Oils</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-spices"
              />
              <label for="category-spices">Organic Spices</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-vegetables"
              />
              <label for="category-vegetables">Organic Vegetables</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="checkbox"
                name="checkbox"
                className="input-control"
                id="category-groceries"
              />
              <label for="category-groceries">Organic Groceries</label>
            </div>
          </div>
          <div className="filter-category-wrapper flex-column">
            <h4 className="filter-heading">RATINGS</h4>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="four-stars-and-above"
              />
              <label for="four-stars-and-above">4 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="three-stars-and-above"
              />
              <label for="three-stars-and-above">3 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
                type="radio"
                name="rating-filter-radio"
                className="input-control"
                id="two-stars-and-above"
              />
              <label for="two-stars-and-above">2 stars & above</label>
            </div>
            <div className="form-group-input-control flex-row">
              <input
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
