import logo from './logo.svg';
import './App.css';
import SelectColor from './classTasks/apiComps/selectColor';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function App() {
  return (
   <>
       <div className='container my-5 p-5' style={{background:"#f1f1f1"}}>

      <SelectColor></SelectColor>
      </div>
      
   </>
  );
}

export default App;
