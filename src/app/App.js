import './scss/App.scss';
import WeatherSearch from './components/WeatherSearch';
import SearchList from "./components/SearchList";
import ExtendedWeather from "./components/ExtendedWeather";

function App() {
  return (
    <>
      <WeatherSearch/>
      <SearchList />
      <ExtendedWeather />
    </>
  );
}

export default App;
