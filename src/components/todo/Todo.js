import React, { Component, } from 'react';
import './todo.scss';
class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: '',
			removingId: '',
		};
	}
handleChange =(e) => {
	const { name, value, } = e.target;
	this.setState({
		[name]: value,
	});
}

handleRemoveTodo = (id) => {
	this.setState({ removingId: id,});
	this.props.handleRemoveTodo(id);
}
handleAddTodo = (e, content) => {
	e.preventDefault();
	this.setState({ todo: '', });
	this.props.handleAddTodo(content);
}

handleEditTodo = (id, content) => {
	this.props.handleEditTodo(id, content);
}

render() {
	const { todos, } = this.props;
	const { todo, removingId, } = this.state;
	return (
		<div className="todo">
			{ todos.fetching && <div className="loading"> Loading ... </div> }
			<form>
				<input type="text" name="todo" value={todo} onChange={this.handleChange}/>
				<button type="submit" onClick={(e) => this.handleAddTodo(e, todo)}> Add Todo </button>
			</form>

			<div className="todo-container">
				<div className="title"> Todos </div>
				{ todos.todos.map(todo => {
					return (
						<div key={todo.id} className={removingId === todo.id ? 'each-todo gray' : 'each-todo'}>
							<input type="checkbox" />
							<div className="todo-text">{ todo.content } </div>
							{ !todo.pinned && <button className="html-icon-button empty-star" onClick={() => this.handleEditTodo(todo.id, { pinned: true, })}>&#9734;</button> }
							{ todo.pinned &&	<button className="html-icon-button filled-star" onClick={() => this.handleEditTodo(todo.id, { pinned: false, })}>&#9733;</button> }
							<button onClick={() => this.handleRemoveTodo(todo.id)} disabled={removingId === todo.id}> Remove </button>
						</div>
					);
				}) }
			</div>
			<div className="completed-todo">
				<div className="title"> Completed Todos </div>
			</div>
			<div className="pinned-todo">
				<div className="title"> Pinned Todos </div>
			</div>
		</div>
	);
}

}

export default Todo;