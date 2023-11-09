import './BookFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';

function BookFilter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleResetFilters() {
    dispatch(resetFilters());
  }

  return (
    <div className="app-block filter">
      <div className="filter-raw">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Фильтрация по названию книги"
            onChange={handleTitleFilterChange}
          ></input>
        </div>
      </div>
      <button type="button" onClick={handleResetFilters}>
        Очистить фильтр
      </button>
    </div>
  );
}

export default BookFilter;
