import * as React from 'react';
import "./TaskInput.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



interface Props {
    
}

interface State {

}



class TaskInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <section className="task-input-wrapper">
                <div className="searchbar-container">
                    <div className="searchbar-content">
                        <input type="text" placeholder="Tilføj opgave..." />
                        <button><FontAwesomeIcon icon={faPlusCircle} /></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default TaskInput;