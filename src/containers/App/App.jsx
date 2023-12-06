

import './App.css';
import { Route,Routes} from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header/Header';



const App =()=> {
  return (
    <>
      
       <Header/>
        <Routes>
        {routesConfig.map((route, index) => (
            <Route
              key = {index}
              path ={route.path}
              element = {route.element}
            />
        ))}
        </Routes>
        

       
     
    </>
  );
}

export default App;


