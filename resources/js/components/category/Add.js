import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
    
    constructor()
    {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            category_name:''
        }
    }
    
    onChangeCategoryName(e){
        this.setState({
            category_name:e.target.value
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const category ={
            category_name : this.state.category_name
        }

        axios.post('http://127.0.0.1:8000/category/store',category)
        .then(res=>console.log(res.data));
   }

    render() {
        return (
           <div>
               <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="category_name">Event Name</label>
                    <input type="text" 
                    class="form-control" 
                    id="category_name" 
                    value={this.state.category_name}
                    onChange={this.onChangeCategoryName}
                    placeholder="share event" />
                </div>
  
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
         </div>
        );
    }
}