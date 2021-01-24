import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: '20c74c40ee924c9ea8c1658f7782a796',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgLink: '',
      link: '',
      box: {},
      route: 'signin',
    };
  }

  bounding_box = (response) =>
    response.rawData.outputs[0].data.regions[0].region_info.bounding_box;

  calculate = (box) => {
    let img = document.getElementById('face_img');
    let div = document.getElementById('div_img');
    let d_width = div.offsetWidth;
    const height = img.height;
    const width = img.width;
    const from_top = Number(box.top_row) * height;
    const from_right =
      (d_width - width) / 2 + Number(1 - box.right_col) * width;
    const from_bottom = Number(1 - box.bottom_row) * height;
    const from_left = (d_width - width) / 2 + Number(box.left_col) * width;
    return {
      from_top: from_top,
      from_right: from_right,
      from_bottom: from_bottom,
      from_left: from_left,
    };
  };

  OnInputChange = (event) => {
    this.setState({
      link: event.target.value,
    });
  };

  OnClick = () => {
    this.setState({
      imgLink: this.state.link,
    });
    app.models.predict(Clarifai.FACE_EMBED_MODEL, this.state.link).then(
      (response) => {
        const facebox = this.calculate(this.bounding_box(response));
        this.setState({
          box: facebox,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  signInClick = () => {
    this.setState({ route: 'home' });
  };

  signOutClick = () => {
    this.setState({ route: 'signin' });
  };
  registerClick = () => {
    this.setState({ route: 'signup' });
  };
  /* OnRouteChange = (route) => {
    if (route === "signin") {
      this.setState({route:'signup'})
    } else if(route === "signup") {
      this.setState({route:'signin'})
    } else{
      this.setState({route:'signin'})
    }
  } */
  render() {
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
            },
          }}
        />
        <Navigation
          signOutClick={this.signOutClick}
          registerClick={this.registerClick}
          signInClick={this.signInClick}
          route={this.state.route}
        />

        {this.state.route === 'signin' ? (
          <Signin
            registerClick={this.registerClick}
            signInClick={this.signInClick}
          />
        ) : this.state.route === 'signup' ? (
          <Register
            signInClick={this.signInClick}
            signOutClick={this.signOutClick}
          />
        ) : (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              OnInputChange={this.OnInputChange}
              OnClick={this.OnClick}
            />
            <FaceRecognition
              box={this.state.box}
              Link={this.state.imgLink.toString()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
