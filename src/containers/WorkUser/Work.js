import React, {Component} from 'react';
import {Link} from "react-router-dom";


import {connect} from "react-redux";



class Work extends Component {
    componentDidMount() {
        this.props.getWork({type: "GET_WORK_STUDENTS"})
    }

    render() {
        const {work} = this.props
        return(
            <div className="work">
                {work.map((items) =>
                    (<Link to={`/user/work/${items.id}`} key={items.id}><div className="work-item">
                        <h4>{items.nameWork}</h4>
                    </div></Link>)
                )}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        work: store.WorkStudentReducer.work
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWork: (action) => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Work)