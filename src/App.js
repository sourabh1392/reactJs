import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      showParagraph: false,
    };
  }
  render() {
    const fruits = ['mango', 'apple', 'orange', 'pineapple', 'jackfruit'];
    console.log(this.state.input);
    return (
      <>
        <textarea
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              showParagraph: !this.state.showParagraph,
            });
          }}
        >
          Display in uppercase
        </button>
        {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
        <p>My favorite fruits are:</p>
        {fruits.map((fruit) => {
          return <p key={fruit}>{fruit}</p>;
        })}
      </>
    );
  }
}

export default App;
