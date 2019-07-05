import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTodos } from './../../actions/todoActions';

class Todos extends Component {

    componentDidMount() {
        this.props.getTodos();
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
  });

export default connect(mapStateToProps, { getTodos })(Todos);
