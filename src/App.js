import React, { Component } from "react";
import FriendCard from "./components/IconCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import GameContainer from "./components/GameContainer";
import icons from "./icons.json";

class App extends Component {
  
  // Setting this.state.friends to the friends json array
  state = {
    icons
  };

  selectIcon = id => {
    // Filter this.state.friends for friends with an id not equal to the id being selected
    const icons = this.state.icons.filter(icon => icon.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ icons });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <GameContainer>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.icons.map(icon => (
            <FriendCard
              selectIcon={this.selectIcon}
              id={icon.id}
              key={icon.id}
              icon={icon.icon}
            />
          ))}
        </Wrapper>
        <Footer />
      </GameContainer>
    );
  }
}

export default App;
