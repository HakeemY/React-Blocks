import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="row">
        <Navigation></Navigation>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
