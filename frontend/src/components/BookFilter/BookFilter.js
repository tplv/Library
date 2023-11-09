import './BookFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
  selectTitleFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';

function BookFilter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleAuthorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value));
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
      </div>
      <button type="button" onClick={handleResetFilters}>
        Очистить фильтр
      </button>
    </div>
  );
}

export default BookFilter;
