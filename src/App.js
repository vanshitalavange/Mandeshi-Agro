import { Header, Footer } from "./components/index";
import { Router } from "./router/routes";
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
