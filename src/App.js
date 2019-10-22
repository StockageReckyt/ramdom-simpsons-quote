import React from "react";
import RamdomQuote from "./components/RamdomQuote";
import axios from "axios";

const objectGeorge = {
  quote:
    "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { george: objectGeorge };

    this.getGeorge = this.getGeorge.bind(this);
  }

  getGeorge() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          george: data[0]
        });
      });
  }

  render() {
    return (
      <div>
        <RamdomQuote george={this.state.george} />
        <button type="button" onClick={this.getGeorge}>
          get new quote
        </button>
      </div>
    );
  }
}

export default App;
