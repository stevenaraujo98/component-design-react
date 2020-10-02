import React from 'react';
import './App.css';

import { Parallax } from 'react-parallax';
import BackParticle from "./Components/BackgroundParticle/Inicio";
import BackLogo from "./Components/BackgroundLogo/Inicio";
import Login from "./Components/Login/Login";
import Login2 from "./Components/Login2/Login";
import Button from "./Components/Button/Button";
import Spinner from "./Components/Spinner/Spinner";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

function App(props) {
  

  return (
    <>

      <Parallax bgImage={ image1 } strength={500}>
        <div style={{height:500}}>
          <div style={inlineStyle}>
            Texto ....
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={ image2 } blur={{min: -1, max: 5}}>
        <div style={{height:500}}>
          <div>
            <Button value="Boton en Parallax"/>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={ image3 } strength={-200}>
        <div style={{height:500}}>
          <div>
            <Spinner/>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={ image4 } strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        
        <div style={{height:"100vh"}}>
          <div>
            <Login2 title={"Login"}
            inputUser={"Username"}
            inputPass={"Password"}
            btn={<Button value="Login"/>}
            {...props}/>
          </div>
        </div>
      </Parallax>

      <div className="bodyBackParticle">
        <BackParticle/>
        <div className="bodyplus">
          <h2>DOS</h2>
          <p>texto</p>
        </div>
      </div>

      <div className="bodyBackLogo">
        <BackLogo logo="fab fa-github-square logo" />
      </div>

      <div className="bodyBackLogin">
        <Login title={"Login"}
        inputUser={<input type="text" placeholder="Username"/>}
        inputPass={<input type="password" placeholder="Password"/>}
        {...props}/>
      </div>

      <div className="bodyBackLogin2">
        <Login2 title={"Login"}
        inputUser={"Username"}
        inputPass={"Password"}
        btn={<Button value="Login"/>}
        {...props}/>
      </div>

      <div className="bodyBtn">
        <Button value="Button"/>
      </div>

      <div className="bodySpinner">
        <Spinner/>
      </div>

      
    </>
  );
}

export default App;
