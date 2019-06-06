import React, {Component} from 'react';
import Modal from "react-responsive-modal"

import {connect} from "react-redux";


class modalAssemet extends Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
        this.state = {
            modalIsOpen: false,
        }
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
            <div>
                <button onClick={() => this.setState({modalIsOpen: true})}>Оценить</button>
                <Modal
                    open={this.state.modalIsOpen}
                    onClose={() => this.setState({modalIsOpen: false})}
                >
                    <form className="modal-add-theme"
                          onSubmit={(event) => this.handleSubmit(event, this.props.id)}>
                        <label>
                            <h4>Оценка</h4>
                            <input type="number" ref={this.refInput} max={5} min={1}/>
                        </label>
                        <button type='submit'>ОК</button>
                    </form>
                </Modal>
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
        assement: (action) => dispatch(action),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(modalAssemet)