import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey, purple, red } from "@mui/material/colors";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
      main: purple[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
