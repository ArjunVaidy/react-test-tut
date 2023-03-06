import GetAll from "./components/GetAllByQuery/GetAll";
import Getby from "./components/GetByQuery/Getby";
import Queryby from "./components/QueryBy/Queryby";

function App() {
  return (
    <div>
      <Queryby />
      <Getby />
      <GetAll />
    </div>
  );
}

export default App;
