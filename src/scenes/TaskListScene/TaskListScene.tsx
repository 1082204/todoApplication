import * as React from 'react';
import TaskInput from '../../components/TaskInput';
import "./TaskListScene.scss";



interface Props {
    
}

interface State {

}



class TaskListScene extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <div className="task-list-wrapper">
                <h1>Opgaveliste</h1>
                <TaskInput />
            </div>
        );
    }
}

export default TaskListScene;