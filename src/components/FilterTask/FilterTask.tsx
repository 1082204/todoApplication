import * as React from 'react';
import "./FilterTask.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'



interface Props {
    
}

interface State {

}



class FilterTask extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <section className="filter-task-container">
                <div className="dropdown-menu-wrapper">
                    <FontAwesomeIcon icon={faSort} />
                </div>
            </section>
        );
    }
}

export default FilterTask;