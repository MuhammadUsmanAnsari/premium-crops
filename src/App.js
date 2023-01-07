import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Routes from './Routes/Routes';
import AuthContextProvider from './Context/AuthContext';
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Routes/>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
      </AuthContextProvider>

    </div>
  );
}

export default App;
