import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'src/actions/todo.action';

import { Todo as TodoComponent } from 'src/components';

class Todo extends Component {
    constructor(){
        super();
    }

    componentDidMount() {
        // fetch data here
    }

    handleAddTodo = (content) => {
        this.props.todoActions.addTodo(content)
                    
    }

    handleRemoveTodo = (id) => {
        this.props.todoActions.removeTodo(id)
    }


    render() {
        return (
            <div>
                <TodoComponent  handleAddTodo={this.handleAddTodo} handleRemoveTodo={this.handleRemoveTodo} todos={this.props.todo}/>
            </div>
        )
    }
}

// define all the proptypes
// Todo.PropTypes = {

// }

const mapStateToProps = (store, props) => {
    return {
        todo: store.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        todoActions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);