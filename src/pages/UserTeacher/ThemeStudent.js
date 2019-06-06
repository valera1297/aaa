import React, {Component} from 'react';
import Modal from "./modalAssemet"

import {connect} from "react-redux";


class ThemeStudent extends Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
        this.state = {
            modalIsOpen: false,
        }
    }

    componentDidMount() {
        this.props.getThemeStudent()
    }


    handleSubmit = (event, id) => {
        if (this.refInput.current.value) {
            console.log(id)
            const action = {
                type: "TEACHER_ASSEMENT",
                payload: {
                    assessmentTeacher: this.refInput.current.value,
                    id: id,
                }
            }
            this.props.assement(action)
            this.setState({modalIsOpen: false})
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="themestudent">
                {this.props.themeStudent.map((items) => {
                        return (
                            <div key={items.id} className="themestudent_items">
                                <span>{items.themeShort}</span>
                                <span>{items.themeFull}</span>
                                {items.resume ? (
                                        <a href={'http://localhost:8000' + items.resume} download target='_blank'>
                                            <span>{items.student_first_name + " " + items.student_patronymic + " " + items.student_last_name + " " + items.student_group}</span>
                                        </a>)
                                    :
                                    <span>{items.student_first_name + " " + items.student_patronymic + " " + items.student_last_name + " " + items.student_group}</span>
                                }
                                <span>{items.noteTheme}</span>
                                <span>{items.assessmentTeacher}</span>
                                <Modal id={items.id}/>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        themeStudent: store.WorkTeacherReducer.themeStudent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getThemeStudent: () => dispatch({type: 'GET_THEME_STUDENT'}),
        assement: (action) => dispatch(action),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeStudent)