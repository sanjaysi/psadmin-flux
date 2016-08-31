"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentWillMount: function() {
        this.setState({ authors: AuthorApi.getAllAuthors()} );
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <div>
                    <tr key={author.id}>
                        <td>
                            <a href={"/#authors" + author.id}>{author.id}</a>
                        </td>
                        <td>
                            {author.firstName} {author.lastName}
                        </td>
                    </tr>
                </div>
            );
        };

        return (
            <div>
                <h1>Authors</h1>

                <table className="table table-hover">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;