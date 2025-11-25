import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import SubMenu from './components/SubMenu.jsx';
 
function App() {
  

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts" >
          <h2>Core Concepts</h2>
          
          <ul>

            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}         

          </ul>
        </section>
        <SubMenu />

      </main>
    </div>
  );
}

export default App;
