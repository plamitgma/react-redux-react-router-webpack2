import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addStudent } from '../../actions/student';

class App extends Component {
    constructor() {
        super();
        this.state = {
            textValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        var stu = {
            id: new Date().getTime(),
            name: this.state.textValue
        };
        const { addStudent } = this.props;
        addStudent(stu);
    }

    render() {
        const { students } = this.props;
        return (
            <div>
                <button onClick={this.handleChange}>Add</button>
                <input type="text" value={this.state.textValue} onChange={(e) => this.setState({ textValue: e.target.value })} />
                <div>
                    {
                        students.length > 0 &&
                        students.map(stu => (
                            <div>{stu.name}</div>
                        ))
                    }
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.student.students,
    };
};

export default connect(mapStateToProps, {
    addStudent
})(App);








// const App2 = () => (
//     <div>
//     <h1>Helo every one, my name is super man1!</h1>
// </div >
// )


// function App1() {
//     return (
//         <div>
//             <h1>Helo every one, my name is super man2!</h1>
//         </div >
//     )
// }


