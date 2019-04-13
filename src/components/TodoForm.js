import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super()
        //state means the value that start this fields
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        //this code means that this function handleinput belong to thi constructor
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        // e.target.value
        //this means desestructure the variable e into value and name to get it
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
        // console.log(this.state);
        
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onAddTodo(this.state)
    }



    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit} className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="responsible"
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Responsible"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="description" 
                                onChange={this.handleInput}
                                className="form-control"
                                placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                onChange={this.handleInput}
                            >
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
          </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoForm