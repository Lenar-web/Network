import React, {useState,useEffect} from 'react'

const ProfileStatus = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [myStatus, setStatus] = useState(status);

    useEffect(() => {
            setStatus(status)
    }, [status]);
    
    let activateEditMode = () =>{
        setEditMode(true)
    }
    let deactivateEditMode = () =>{
        setEditMode(false)
        updateStatus(myStatus)
    }
    let onChangeStatus = (e) =>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode && <span onClick={activateEditMode}>{myStatus || 'no status'}</span>}
            {editMode && <input className='status-input' autoFocus onChange={onChangeStatus} onBlur={deactivateEditMode} type="text" value={myStatus}/>}
        </div>
    );
};

export default ProfileStatus;
