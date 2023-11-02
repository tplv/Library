import './App.css';
import BookFilter from './components/BookFilter/BookFilter';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Книжная библиотека</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <BookFilter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
