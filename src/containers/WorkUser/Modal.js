import React, {Component} from 'react';

import Modal from "react-responsive-modal";


class myModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.refInput = React.createRef()
        this.refAria = React.createRef()
    }

    submit = (event) => {
        event.preventDefault();
        const action = {
            type: "STUDENT_ASSEMENT",
            payload:{
                assessmentStudent: this.refInput.current.value,
                noteTheme: this.refAria.current.value || '-',
                id: this.props.id,
                WorkId: this.props.WorkId,
            }
        }
        this.props.assement(action)
        this.setState({modalIsOpen: false})
    }

    render() {
        return (
            <div>

                <button onClick={() => this.setState({modalIsOpen: true})}>Оценить тему</button>
                <Modal
                    open={this.state.modalIsOpen}
                    onClose={() => this.setState({modalIsOpen: false})}
                >
                    <form className="modal-add-theme" onSubmit={this.submit}>
                        <label>
                            <h4>Оценка</h4>
                            <input type="number" ref={this.refInput} max={5} min={1}/>
                        </label>
                        <label>
                            <h4>Ваше описание</h4>
                             <textarea ref={this.refAria}/>
                        </label>
                        <button type='submit'>ОК</button>
                    </form>
                </Modal>

            </div>
        )
    }
}

export default myModal