import React, {useState, useEffect, FC} from 'react'

type PropsType ={
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatus: FC<PropsType>= ({status, updateStatus}) => {

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
    let onChangeStatus = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) =>{
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
