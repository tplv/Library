import './BookFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectAuthorFilter,
  selectTitleFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';

function BookFilter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleAuthorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value));
  }

  function handleOnlyFavoriteFilterChange() {
    dispatch(setOnlyFavoriteFilter());
  }

  function handleResetFilters() {
    dispatch(resetFilters());
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Фильтрация по названию книги"
            onChange={handleTitleFilterChange}
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Фильтрация по автору"
            onChange={handleAuthorFilterChange}
          ></input>
        </div>

        <div className="filter-group">
          <button type="button" onClick={handleResetFilters}>
            Очистить фильтры
          </button>
        </div>
        <div className="folter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Только избранные
          </label>
        </div>
      </div>
    </div>
  );
}

export default BookFilter;
