import React, { Component } from 'react';

class Habit extends Component {
  // prop으로 전달받은 습관의 데이터를 보여주기만 하는 컴포넌트이기 때문에 state를 가지고 있을 필요가 없음.
  //   state = {
  //     count: 0,
  //   };

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    //    state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야 함.
    //    this.state.count += 1; 리액트에서는 업데이트 됐는 지 모름.
    //    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    //    const count = this.state.count - 1;
    //    this.setState({ count: count < 0 ? 0 : count });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log(this.props.habit);
    // const habitName = this.props.habit.name;
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
