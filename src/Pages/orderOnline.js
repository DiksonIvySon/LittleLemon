import React, {Component} from 'react';
import Nav from '../Components/nav';
import Header from '../Components/homeHeader';
import Footer from '../Components/footer';
import Specials from '../Components/specials';


class OrderOnline extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className='body'>
        <nav className='nav'>
            <Nav />
        </nav>
        <header className='header'>
            <Header />
        </header>
        <main>
            <Specials/>
        </main>
        <footer className='footer'>
            <Footer />
        </footer>
      </section>
    );
  }
}

export default OrderOnline;