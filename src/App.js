import './App.css'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <HeaderNav />

      <h2 className='tittle'>My Todo List</h2>

      <section className='col1'></section>
      <section className='col2'></section>

      <Footer />
    </>
  );
}

export default App;
