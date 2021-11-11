import './scss/App.scss';
import WeatherSearch from './components/WeatherSearch';
import { SearchList } from "./components/parts/SearchList";

function App() {
  return (
    <>
      <WeatherSearch/>

      <SearchList />
    </>
  );
}

export default App;
