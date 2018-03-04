import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = (props) => {
    let { project } = props
    return (
        <tr>
            <td className="ModelList_Select">
                <i className="fa fa-folder-o"></i>
            </td>
            <td>
                <Link to={`/projects/${project.name}`}>{project.name}</Link>
            </td>
            <td>{project.owner.username}</td>
            <td>{project.email}</td>
            <td>{project.root_email}</td>
            <td>{project.description}</td>
        </tr>
    )
}

export default ProjectListItem