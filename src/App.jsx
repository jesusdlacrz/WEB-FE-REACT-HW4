import Header from './components/header';
import Introduction from './components/introduction';
import Diagnosis from './components/diagnosis';
import Identity from './components/O_Identity';
import Objectives from './components/S_objectives';
import Footer from './components/footer';

const App = () => (
  <div className="bg-azuloscuro font-montserrat"> 
    <Header />
    <div className='bg-azuljunior ml-2 mr-2 sm:mx-32'>
      <Introduction />
      <Diagnosis />
      <Identity />
      <Objectives />
    </div>
    <Footer />
  </div>
);

export default App;
