import React from 'react'
import './App.css';

const keycodes = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function App() {

  const [soundProfile, setSoundProfile] = React.useState(false);
  const [soundName, setSoundName] = React.useState("");


  let sampleClick = (keycode) => {
    let audioSound = null;

    console.log(keycode.keyCode)

    if(soundProfile === false){
      for(let x = 0; x < bankOne.length; x++){
        if(bankOne[x].keyTrigger === keycode.keyCode){
          console.log("found in bank one")
          setSoundName(bankOne[x].id)
          audioSound = new Audio(bankOne[x].url)
        }
      }
    }
    else{
      for(let x = 0; x < bankTwo.length; x++){
        if(bankTwo[x].keyTrigger === keycode.keyCode){
          console.log("found in bank two")
          setSoundName(bankTwo[x].id)
          audioSound = new Audio(bankTwo[x].url)
        }
      }

    }
    
    if(audioSound !== null){
      audioSound.play()
    }
      
    

    
  };

  return (
    <div id="drum-machine" className="App">
      <div id="title" className="">
        <p className="h1">
          Drum Machine
        </p>
      </div>
      <div id="display" className="container">
        <div>
          <div id="drum-control" class="">
            <a 
              class="btn btn-primary" 
              onClick={() => {setSoundProfile(!soundProfile)}}
            >Change Sound Profile </a>
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {soundProfile ? "First Sound Profile" : "Second Sound Profile"}
            </label>
          </div>
        </div>
        <div className="row">
          {soundName}
        </div>
        <div className="row">
          {keycodes.map((keyCode)=> {
              return (
              <div className="col-md-4 drum-square pb-3 pt-2">
                <div
                  className="card"
                  onClick={() => sampleClick({keyCode})}
                >
                  {keyCode}
                </div>
                
              </div> )
            
          })}
          
        </div>
      </div>
    </div>
  );
}

export default App;
