import './App.css';
import React from 'react';

class App extends React.Component
{
    constructor(props){
      super(props);
    }

    render()
    {
      return (
        <div id="drum-machine">
              <div id="display" class= "keyboard">
                
                      <button  class = "drum-pad" type="button" id="DrumQ">                      
                        <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' class = "clip" id ="Q"/>
                        Q
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumW">
                        <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' class = "clip" id ="W"/>                   
                        W
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumE">
                        <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' class = "clip" id ="E"/>
                        E
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumA">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'  class = "clip" id ="A"/>
                        A
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumS">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'  class = "clip" id ="S"/>
                        S
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumD">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' class = "clip" id ="D"/>
                        D
                      </button>       
                
                      <button  class = "drum-pad" type="button" id="DrumZ">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'  class = "clip" id ="Z"/>
                        Z
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumX">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' class = "clip" id ="X"/>
                        X
                      </button>
                      <button  class = "drum-pad" type="button" id="DrumC">
                          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' class = "clip" id ="C"/>
                        C
                      </button>
                          
              </div>
        </div>   
        );
    }
}


export default App;
