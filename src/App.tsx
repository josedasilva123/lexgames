/* eslint-disable no-restricted-globals */
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "./components/GlobalLoading";
import Providers from "./contexts/Providers";

function App() {
  /*
  useEffect(() => {
    const localStorageList = localStorage.getItem("@FAVORITE_LIST");
    if (localStorageList) {
      setFavoriteList(JSON.parse(localStorageList));
    }
  }, []);
 
  useEffect(() => {
    if (favoriteList.length) {
      localStorage.setItem("@FAVORITE_LIST", JSON.stringify(favoriteList));
    }
  }, [favoriteList]);
  */

  return (
    <div className="App">
      <Providers>
        <GlobalLoading>
          <AppRoutes />
        </GlobalLoading>
        <ToastContainer autoClose={2500} position="top-center" theme="dark" />
      </Providers>
    </div>
  );
}

export default App;
