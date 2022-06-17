import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { PopupComponentContext } from './components/store/popup-context';

function App() {
  return (
    <PopupComponentContext>
   <Header />
   <main>
      <Meals/>
   </main>
   </PopupComponentContext>
  );
}

export default App;
