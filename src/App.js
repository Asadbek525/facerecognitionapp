import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className='App'>
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 150,
            },
            size: {
              value: 3,
            },
          }
        }}
      />
      <Navigation></Navigation>
      <Logo />
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
