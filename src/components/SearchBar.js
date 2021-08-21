import React, { Component } from "react";

class SearchBar extends Component {
    state = { term: "" };

    inputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.inputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
