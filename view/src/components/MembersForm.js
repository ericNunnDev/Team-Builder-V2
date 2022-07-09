import React, { useState } from 'react';

const MembersForm = props => {
    const [member, setMember] = useState({ name: '', email: '', role: '' });

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: '' });
    };

    return ( 
        <div className='container'>
            <h3>Add New Members Here: </h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name: 
                <input
                  id='name'
                  type='text'
                  name='name'
                  onChange={handleChanges}
                  value={member.name} 
                />
            </label>
            <label htmlFor='email'>
                Email: 
                <input
                  id='email'
                  type='email'
                  name='email'
                  onChange={handleChanges}
                  value={member.email} 
                />
            </label>
            <label htmlFor='role'>
                Role: 
                <input
                  id='role'
                  type='text'
                  name='role'
                  onChange={handleChanges}
                  value={member.role} 
                />
            </label>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
     );
  }
 
export default MembersForm;