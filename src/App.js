import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';

function App() {
  const products = [

    {
      "imagen": "🌱",
      "codigo": 1,
      "nombre": "Maceta",
      "importe": 290
    },
    {
      "imagen": "👚",
      "codigo": 2,
      "nombre": "Perchero",
      "importe": 790
    },
    {
      "imagen": "🖼️",
      "codigo": 3,
      "nombre": "Cuadro",
      "importe": 590
    },
    {
      "imagen": "👄",
      "codigo": 4,
      "nombre": "Servilletero",
      "importe": 490
  },
  {
      "imagen": "📦",
      "codigo": 5,
      "nombre": "Caja",
      "importe": 390
  },
  {
      "imagen": "🥛",
      "codigo": 6,
      "nombre": "Posavasos",
      "importe": 190
  },
  {
      "imagen": "📓",
      "codigo": 7,
      "nombre": "Libreta",
      "importe": 290
  },
  {
      "imagen": "✏️",
      "codigo": 8,
      "nombre": "Portalapices",
      "importe": 290
  },
  {
      "imagen": "🫖",
      "codigo": 9,
      "nombre": "Caja de té",
      "importe": 890
  },
  {
      "imagen": "🧺",
      "codigo": 10,
      "nombre": "Canasto",
      "importe": 390
  }
   
  ];
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <ItemListContainer products={products} />} />
          {/* Corrección aquí */}
          <Route path="/item/:id" component={ProductDetail} />
          <Route component={() => <div>Página no encontrada</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;