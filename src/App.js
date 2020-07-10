import React from 'react';
import './App.css';

class App extends React.Component {
      state = {
        colors: [
        "Crimson", "DarkRed", "DarkSalmon", "FireBrick", "IndianRed", "LightCoral", 
            "Maroon", "PaleVioletRed", "Red", "Salmon", "Tomato", "Chartreuse", "DarkGreen", "DarkOliveGreen", "DarkSlateGrey", "DodgerBlue", 
            "ForestGreen", "Green", "GreenYellow", "LawnGreen", "LightGreen", "LightSkyBlue", 
            "Lime", "LimeGreen", "MediumSpringGreen", "MediumTurquoise", "Olive", "OliveDrab", 
            "PaleGreen", "SpringGreen", "YellowGreen","AliceBlue", "Blue", "CadetBlue", "CornflowerBlue", "Cyan", "DarkBlue", 
            "DarkCyan", "DeepSkyBlue", "LightBlue", "LightCyan", "LightSteelBlue", "MediumBlue",
             "MidnightBlue", "Navy", "PowederBlue", "RoyalBlue", "SkyBlue", "SteelBlue","AntiqueWhite", "Beige", "Bisque", "BlanchedAlmond", "Brown", "BurlyWood", 
            "Cornsilk", "DarkGoldenRod", "DarkKhaki", "FloralWhite", "Ivory", "Linen", "Moccasin",
             "NavajoWhite", "OldLace", "PapayaWhip", "PeachPuff", "Peru", "RosyBrown", "SaddleBrown",
              "SandyBrown", "SeaShell", "Sienna", "Tan", "Wheat","Aqua", "Aquamarine", "Azure", "DarkSeaGreen", "DarkTurquoise", "HoneyDew", 
            "LightSeaGreen", "MediumAquaMarine", "MediumSeaGreen", "MintCream", "PaleTurquoise", 
            "SeaGreen", "Teal", "Turquoise","Black", "DarkGray", "DimGrey", "Gainsboro", "GhostWhite", "Grey", "LightGrey", 
            "LightSlateGrey", "Silver", "SlateGrey", "Snow", "White", "WhiteSmoke", "BlueViolet", "DarkMagenta", "DarkOrchid", "DarkSlateBlue", "DarkViolet", 
            "DeepPink", "Fuchsia", "HotPink", "Indigo", "Lavender", "LavenderBlush", "LightPink", 
            "LightSalmon", "Magenta", "MediumOrchid", "MediumPurple", "MediumSlateBlue", 
            "MediumVioletRed", "MistyRose", "Orchid", "Pink", "Purple", "RebeccaPurple", 
            "SlateBlue", "Thistle", "Violet", "Chocolate", "Coral", "DarkOrange", "Orange", 
            "OrangeRed", "Gold", "GoldenRod", "Khaki", "LemonChiffon", "LightGoldenRodYellow", 
            "LightYellow", "PaleGoldenRod", "Yellow"
        ]
      };

      render() {
        return (
            <div className="App">
              <header className="App-header">
                <h1>
                  color<span>scape</span>
                </h1>
                <h2>
                  A Simple Reactive Color Scheme Helper
                </h2>
              </header>
              <main
                className="main-content"
              >
                  <section
                    class="colors"
                  >   
                      {this.state.colors.map( (color) =>
                            <div
                              style={{
                                backgroundColor: color,
                                borderColor: color,
                                color: "white"
                              }}
                            >
                              {color}
                          </div>
                        )}
                  </section>
              </main>
            </div>
          );
      }
  
}

export default App;

