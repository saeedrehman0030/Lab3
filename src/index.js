import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {students: []}
    }

//Showed Database
componentWillMount() {

            fetch('http://localhost:3000/students/')
                .then(res => res.json())
                .then(res => this.setState({ students: res.results }))
                .catch(err => { console.log(err) })

                console.log(this.state.students);
                console.log("Test here.");
    } 

    render() {
        return (
            <React.Fragment>
                <div>
                <h1 align="center">HKR MSCS Students</h1>
                <table border='2' width='50%' align="center">
                    <thead><tr>
                            <th>ID</th>
                            <th>Names</th>
                            <th>Countries</th>
                        </tr>
                    </thead>

                    { this.state.students.map((task1) => (
                        <tbody>
                            <tr>
                                <td>{task1.ID}</td>
                                <td>{task1.Names}</td>
                                <td>{task1.Country}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <footer align="center">The End Or ....</footer>
                </div>
            </React.Fragment>
        );

    }

    //Header Action
    onClick() {alert('You clicked a Header');}
}

ReactDOM.render(<App />, document.getElementById('root'));