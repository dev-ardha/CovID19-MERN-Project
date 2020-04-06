import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page Component
import Beranda from './components/beranda/Beranda'
import Bantuan from './components/bantuan/Bantuan'
import Panduan from './components/panduan/Panduan'
import NotFoundPage from './components/NotFoundPage'
import About from './components/about/About'
import Global from './components/global-data/Global'

// Admin Page
// import CreateArticle from './components/CreateArticle'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Header/>
        <Switch>
          {/* Home Routes */}
          <Route path="/" exact component={Beranda} />

          <Route path="/tanyakan" exact component={Bantuan} />

          <Route path="/panduan" exact component={Panduan} />

          <Route path="/about" exact component={About} />
          <Route path="/global-data" exact component={Global} />

          {/* Panduan Routes */}
          <Route path="/panduan/pencegahan" exact component={Panduan} />
          <Route path="/panduan/gejala" exact component={Panduan} />

          {/* Admin */}
          {/* <Route path="/create" exact component={CreateArticle} /> */}

          {/* 404 */}
          <Route path="*" component={NotFoundPage}/>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
