import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />

      <Footer />
    </div>
  );
}

export default App;
