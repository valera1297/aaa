import React, {Component} from 'react';


import {connect} from "react-redux";
import Modal from "./Modal";


class WorkId extends Component {

    componentDidMount() {
        this.props.getWorkId(
            {
                type: "GET_WORK_ID_STUDENT",
                payload: this.props.id
            }
        )
    }

    render() {
        const {workid} = this.props
        return (
            <div className="work-id">
                <div>
                    {workid.map(techer => <div key={techer.id}>
                        {techer.theme.map((items => !items.executor ? <div key={items.id} className="items-workid">
                            <span>Тема: {items.shortDescription}</span>
                            <span>Описание: {items.fullDescription}</span>
                            <span>Преподаватель: {techer.first_name + " " + techer.patronymic + " " + techer.last_name}</span>
                            <span>Текущая оценка темы: {items.assessmentStudent}</span>
                            <Modal id={items.id} assement={this.props.assement} WorkId={this.props.id}/>
                        </div> : ''))}
                    </div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        workid: store.WorkStudentReducer.workid,
        id: ownProps.match.params.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorkId: (action) => dispatch(action),
        assement: (action) => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkId)