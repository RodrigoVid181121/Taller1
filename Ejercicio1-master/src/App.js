import React, {useState} from 'react';
import './App.css';


const App = () => {

  function resultado(cant, prec){
    var result
  return  result = cant*prec
  }

  const [nombre, setNombre] = useState([       
    {nombre:'Banana', precio: '0.15'},
    {nombre:'pera', precio: '0.15'},
    {nombre:'uva', precio: '0.05'},
    {nombre:'elote',precio: '0.20'},
    {nombre:'tomate', precio: '0.20'},
    {nombre:'aguacate', precio: '0.50'},
    {nombre:'rabano', precio: '0.15'},
    {nombre:'pepino', precio: '0.20'},
    {nombre:'cebolla', precio: '0.25'},
    {nombre:'chile verde', precio: '0.25'},]);
  const [cantidad, setCantidad] = useState(''); 
  const [productos, setProductos] = useState([]);

  const agregarProducto = e=>{
    e.preventDefault();
    setProductos([...productos, {nombre}, {cantidad}])
  }

  return (
    <>

      <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">Carrito</span>
      </nav>
      <div className='container'>
        <div className='row'>
           <div className='col-md-7 mt-3'>
             <div className='card'>
                <div className='card-header'>
                 <h4>Productos</h4>
                </div>
                <div className='card-body'>
                <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Productos</th>
                          <th >Cantidad</th>
                        </tr>
                      </thead>
                      <tbody>
                      {productos.map(item =>
                        <tr>
                          <th scope="row">#</th>
                          <td>{item.nombre}</td>
                          <td>{item.cantidad}</td>
                        </tr>
                        )}
                      </tbody>
                    </table>

                    <div className='card'>
                        <div className='card-body'>
                          <form>
                            <label> Total: </label> <label>{resultado(nombre.precio, cantidad.cantidad)} </label>
                          </form>
                        </div>
                    </div>
                </div>
               </div>
              </div>
              <div className='col-md-5 mt-3'>
             <div className='card'>
                <div className='card-header'>
                 <h4>Añadir Productos</h4>
                </div>
                <div className='card-body'>
                  <form onSubmit={agregarProducto}>
                    <div className='form-group'>
                    <select className='form-control' onChange={e=>setNombre(e.target.value)} placeholder = 'Nombre del producto'>
                    {
                     nombre.map((value, index) => (
                    <option value={index}>{value.nombre}-${value.precio}</option>
                         ))
                         
                    }
                    </select>
                    <input type="number" className='form-control' onChange={e=>setCantidad(e.target.value)} placeholder='Ingrese la cantidad' />
                    </div>
                    <div className='form-group'>
                      <input type='submit' value='Añadir' className='btn btn-primary btn-block' />
                    </div>
                  </form>
                </div>
               </div>
              </div>
             </div>
      </div>
    </>
  );
}

export default App;