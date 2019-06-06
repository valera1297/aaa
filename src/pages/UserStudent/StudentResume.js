import React, {Component} from 'react';
import Modal from "react-responsive-modal"

import {connect} from "react-redux";


class Resune extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.state = {
            openModal: false,
        }
    }
    componentDidMount() {
        this.props.getResume()
    }

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal,
        });
    };

    handleSubmit = (event) => {
        if (this.input.current.files[0]) {
            const bodyFormData = new FormData();
            bodyFormData.append("resume", this.input.current.files[0] || '')
            this.props.postResume({type: "POST_RESUME",payload: bodyFormData,})
            this.toggleModal();
        }
        event.preventDefault();
    }

    render() {
        console.log(this.props.resume)
        return(
            <div>
                {this.props.resume.resume && <a href={'http://localhost:8000' + this.props.resume.resume} download target='_blank'>
                    <span>текущие резюме</span>
                 </a>}
                 <p/>
                 <button onClick={this.toggleModal}>Загрузить резюме</button>
                <Modal open={this.state.openModal}
                       onClose={this.toggleModal}
                       center>
                    <form onSubmit={this.handleSubmit}
                          className="formModal">
                        <input type='file'
                               ref={this.input}
                        />
                        <input type="submit"
                               value="загрузить"/>
                    </form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        resume: store.UserReducer.resume
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getResume: () => dispatch({type: 'GET_RESUME'}),
        postResume: (action) => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resune)