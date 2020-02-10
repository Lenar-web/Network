import React, {useState,useEffect} from 'react'

const ProfileStatus = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [myStatus, setStatus] = useState(status);

    useEffect(() => {
        return () => {
            setStatus(status)
        };
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
            {!editMode && <span onClick={activateEditMode}>{status ? status : 'no status'}</span>}
            {editMode && <input autoFocus onChange={onChangeStatus} onBlur={deactivateEditMode} type="text" value={myStatus}/>}
        </div>
    );
};

export default ProfileStatus;
