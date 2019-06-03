import React, {Component} from 'react';
import {Link} from "react-router-dom";


import {
    getWork
} from "../../ActionCreator/WorkAction";

import {connect} from "react-redux";


class Work extends Component {
    componentDidMount() {
        this.props.getWork()
    }

    render() {
        const {work} = this.props
        return(
            <div className="work">
                {work.map((items) =>
                    (<Link to={`/user/work/${items.id}`} className="work-item" key={items.id}><div>
                        <h4>{items.nameWork}</h4>
                        <div>{items.groups.map((items)=>(
                            <span key={items.groupName}>{items.groupName}</span>
                            )
                        )}</div>
                    </div></Link>)
                )}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        work: store.WorkTeacherReducer.work
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWork: () => dispatch(getWork())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Work)