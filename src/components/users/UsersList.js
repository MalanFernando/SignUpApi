import imgProfile from '../../images/user.png'

const UsersList = ({users, selected, removeUser}) => {

    return (
        <div className='users'>
            <h2>Users</h2>
            <ul className='users-content'>
                {
                    users.map((user) =>(
                    <li key={user.id} className='content-item'>
                        <div className='item-info'>
                            <img src={imgProfile} alt="" className='img-profile'/>
                            <div className='info-text'>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p>{user.email}</p>
                                <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
                            </div>
                        </div>
                        <div className='item-btn'>
                            <button onClick={()=> selected(user)} className='btn'><i className="btn-edit fa-solid fa-square-pen"></i></button>
                            <button onClick={()=> removeUser(user.id)} className='btn'><i className="btn-remove fa-solid fa-trash"></i></button>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;