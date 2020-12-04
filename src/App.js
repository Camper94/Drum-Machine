import './App.css';

function App() {
  return (
    <div id="drum-machine">
          <div id="display" class= "keyboard">
            
                  <button  class = "drum-pad" type="button" id="DrumQ">                      
                    <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' type="audio/mpeg" class = "clip" id ="Q"/>       
                    </audio>
                    Q
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumW">
                    <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' type="audio/mpeg" class = "clip" id ="W"/>
                    </audio>
                    W
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumE">
                    <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' type="audio/mpeg" class = "clip" id ="E"/>
                    </audio>
                    E
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumA">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' type="audio/mpeg" class = "clip" id ="A"/>
                    </audio>
                    A
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumS">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' type="audio/mpeg" class = "clip" id ="S"/>
                    </audio>
                    S
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumD">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' type="audio/mpeg" class = "clip" id ="D"/>
                    </audio>
                    D
                  </button>       
            
                  <button  class = "drum-pad" type="button" id="DrumZ">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' type="audio/mpeg" class = "clip" id ="Z"/>
                    </audio>
                    Z
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumX">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' type="audio/mpeg" class = "clip" id ="X"/>
                     </audio>
                    X
                  </button>
                  <button  class = "drum-pad" type="button" id="DrumC">
                      <audio>
                        <source src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' type="audio/mpeg" class = "clip" id ="C"/>
                      </audio>
                    C
                  </button>
                      
          </div>
    </div>   
    );
}

export default App;
