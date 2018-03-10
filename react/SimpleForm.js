// import React, { Component } from 'react';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  
  render() {
    return (
      <form onSubmit={(e) => {
          console.log('전송: ' + this.state.value)
          alert('전송: ' + this.state.value)          
          e.preventDefault()
        }}>
        <input type="text" 
          value={this.state.value} 
          onChange={ (e) => {
            const curValue = e.target.value     
            const newValue = curValue.replace(/[^0-9]/g, '')
            this.setState({ value: newValue })
          }} />
        <button type="submit">전송</button>
      </form>
    );
  }
}
// export default SimpleForm;