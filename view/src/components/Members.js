import React from 'react';

const Members = props => {
    return ( 
        <div className='member-card'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                <button className='edit-btn'><i class='fas fa-pencil-alt'></i></button>
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
                <hr />
                </div>
            ))}
        </div>
     );
}
 
export default Members;