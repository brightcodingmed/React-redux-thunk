import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTodos, addTodo } from './../../actions/todoActions';

class Todos extends Component {
    
    state = {
        todo: {
            title: '',
            completed: false
        }
    }


    componentDidMount() {
        this.props.getTodos();
      }

      initInput = (e) => {
          this.setState({
              todo: {
                  title: e.target.value,
                  completed: false
              }
          })
      }
      
      ajouterTache = () => {
          this.props.addTodo(this.state.todo);
          this.setState({
              todo: {
                  title: '',
                  completed: false
              }
          })
      }
    render() {
        return (
            <div>
                
            <div className="row">
                <div className="col-md-4 mx-auto">

                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      
                      <input onChange={this.initInput} value={this.state.todo.title} type="text" name="title" id="title" className="form-control" />
                      <button onClick={this.ajouterTache} className="btn btn-info btn-block">Add Todo</button>
                    </div>

                </div>
            </div>

                <div className="row">
                    <div className="col-md-12">

                        <ul className="list-group">
                          {this.props.listTodos.map(todo => (
                              <li key={todo.id} className="list-group-item">{todo.title}</li>
                          ))}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

 const mapStateToProps = state => ({
    listTodos: state.myTodos.todos
  });

export default connect(mapStateToProps, { getTodos, addTodo })(Todos);
