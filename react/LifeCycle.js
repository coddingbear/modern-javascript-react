// import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
class FaIcon extends React.Component {
  render() {
    return <i className={'fa fa-' + this.props.icon}></i>
  }
}

class HelloReact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isIncreasing: false,
      likes: 0
    }
    this.like = this.like.bind(this)
    this.unlike = this.unlike.bind(this)
  }
  componentWillMount() {
    this._logPropsAndState('componentWillMount()');  
  }
  componentDidMount() {
    this._logPropsAndState('componentDidMount()');
  }
  
  componentWillUpdate(nextProps, nextState) {
    this._logPropsAndState('componentWillUpdate()');
    console.log('nextState.likes: ', nextState.likes,
               ' nextState.isIncreasing: ', nextState.isIncreasing);
  }
  
  componentDidUpdate(prevProps, prevState) {
    this._logPropsAndState('componentDidUpdate()');
    console.log('prevState.likes: ', prevState.likes,
               ' prevState.isIncreasing: ', prevState.isIncreasing);
  }
  
  _logPropsAndState(callFunc) {
    console.log('=> ' + callFunc);
    console.log('this.state.likes : ' + this.state.likes);
    console.log('this.state.isIncreasing: ' + this.state.isIncreasing);
  }
  
  like() {
    this.setState({
      likes: this.state.likes + 1,
      isIncreasing: true
    })
  }
  unlike() {
    this.setState({
      likes: this.state.likes - 1,
      isIncreasing: false
    })
  }
  render() {
    this._logPropsAndState('render()');
    return (
      <div>
        <Button onClick={this.like}>
          <FaIcon icon='thumbs-up' />
          좋아요
        </Button>
        <Button onClick={this.unlike}>
          <FaIcon icon='thumbs-down' />
          싫어요
        </Button>
        <div className="likes">
          Likes 
          <span>{this.state.likes}</span>
          <FaIcon icon={this.state.isIncreasing ? 'arrow-circle-up' : 'arrow-circle-down'} />
        </div>
      </div>
    );
  }  
}

// export default HelloReact;