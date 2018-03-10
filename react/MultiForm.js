// import React, { Component } from 'react';

class MultiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      hobby: ''
    };
  }
  
  render() {
    const doChange = (e) => {
      const value = e.target.value;
      const key = e.target.name;
      this.setState({
          [key]: value
      });
    };
    
    return (
      <form onSubmit={(e) => {
        console.log(this.state)
        window.alert(JSON.stringify(this.state))
        e.preventDefault()
      }}>
        <p><input name="name" 
              value={this.name} 
              onChange={doChange} 
              placeholder="Name"/></p>
        <p><input name="age" 
              value={this.age} 
              onChange={doChange} 
              placeholder="Age"/></p>
        <p><input name="hobby" 
              value={this.hobby} 
              onChange={doChange} 
              placeholder="Hobby"/></p>
        <button type="submit">전송</button>
      </form>
    );
  }
}
// export default MultiForm;