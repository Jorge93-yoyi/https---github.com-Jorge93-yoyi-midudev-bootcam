import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  
  const Descripcion = () => {
    return <p>Esta mi descripcion</p>
  }
  return (
    <div className="App">
      <Mensaje msg='numero1' color='red'/>
      <Mensaje msg='numero2' color='blue'/>
      <Mensaje  msg='numero3' color='yellow'/>
      <Descripcion />
      <br />
      {2+5}
      <br />
      Lo he convertido en timestamp sino falla ya q no puedes pintar objetos
      <br />
      {+new Date()} 
    </div>
  );
}

export default App;
