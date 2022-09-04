import React, {useState} from 'react';
import './App.css';


const App = () => {

  function resultado(cant, prec){
    var result
    result = cant*prec
  }

  const [nombre, setNombre] = useState(''); 
  const [precio, setPrecio] = useState(''); 
  const [cantidad, setCantidad] = useState(''); 
  const [productos, setProductos] = useState([]);

  const agregarProducto = e=>{
    e.preventDefault();
    setProductos([...productos, {nombre}, {precio}, {cantidad}])
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
                          <th scope="col">Nombre</th>
                          <th >Precio</th>
                          <th >Cantidad</th>
                        </tr>
                      </thead>
                      <tbody>
                      {productos.map(item =>
                        <tr>
                          <th scope="row">#</th>
                          <td>{item.nombre}</td>
                          <td>{item.precio}</td>
                        </tr>
                        )}
                      </tbody>
                    </table>

                    <div className='card'>
                        <div className='card-body'>
                          <form>
                            <label> Total</label>
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
                    <input className='form-control' onChange={e=>setNombre(e.target.value)} placeholder = 'Nombre del producto' />
                    <input className='form-control' onChange={e=>setPrecio(e.target.value)} placeholder='$'/>
                    <input type='number' className='form-control' onChange={e=>setCantidad(e.target.value)}/>
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