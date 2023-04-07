import "./App.css";
import Card from "./components/cards/card";
import Header from "./components/headrer/header";
import Footer from "./components/footer/footer";
import data from "./assets/data";

function App() {
  // const shuffle = [...data].sort(() => Math.random() - 0.5);
  const sort = data.sort((a,b)=>a.name.localeCompare(b.name))
  const cards = sort.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <div className="container">{cards}</div>
      <Footer />
    </div>
  );
}

export default App;
