import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <WelcomeComponent title="CodeTrain is awesome, react works" />
    </div>
  );
};

export default App;

class WelcomeComponent extends React.Component {
  render() {
    const title = this.props;
    return <h1>{this.props.title}</h1>;
  }
}
