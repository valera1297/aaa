import React, {Component} from 'react';
import Modal from 'react-responsive-modal';


import {
    getWorkId,
    setPlace
} from "../../ActionCreator/WorkAction";

import {connect} from "react-redux";


class WorkId extends Component {
    constructor(props) {
        super(props);
        this.refPlace = React.createRef();
        this.refAddShort = React.createRef();
        this.refAddFull = React.createRef();
        this.state = {
            modalIsOpen: false
        };
    }

    componentDidMount() {
        this.props.getWorkId(this.props.id)
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.setPlace({place: this.refPlace.current.value, id: this.props.id})
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    submitAddTheme = (event) => {
        event.preventDefault();
        const action = {
            type: "ADD_THEME",
            payload: {
                sortDescription: this.refAddShort.current.value,
                fullDescription: this.refAddFull.current.value,
                id: this.props.id,
            }
        }
        this.props.addTheme(action)
        this.closeModal();
    }

    render() {
        const {workid} = this.props
        return (
            <div className="work-id">
                {workid
                    ? <div>
                        {workid.map(items => <div key={items.id} className="items-workid">
                            <span>{items.shortDescription}</span>
                            <span>{items.fullDescription}</span>
                            {items.executor && <span>items.executor</span>}
                        </div>)}
                        <button onClick={this.openModal} className="btn-add-theme">Дбавить тему</button>
                        <Modal
                            open={this.state.modalIsOpen}
                            onClose={this.closeModal}
                        >
                            <form className="modal-add-theme" onSubmit={this.submitAddTheme}>
                                <h2>Добавление темы</h2>
                                <label>
                                    <h4>Тема</h4>
                                    <input maxLength={30} ref={this.refAddShort}/>
                                </label>
                                <label>
                                    <h4>Описание темы</h4>
                                    <textarea ref={this.refAddFull}/>
                                </label>
                                <button type='submit'>ADD</button>
                            </form>
                        </Modal>
                    </div>
                    : <form onSubmit={this.submitForm}><h4>укажите количество мест</h4>
                        <input type="number" className="place" ref={this.refPlace} min={1}/>
                        <button type="submit">OK</button>
                    </form>
                }
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        workid: store.WorkTeacherReducer.workid,
        id: ownProps.match.params.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorkId: (id) => dispatch(getWorkId(id)),
        setPlace: (place) => dispatch(setPlace(place)),
        addTheme: action => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkId)