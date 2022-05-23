import React, { useEffect, useState } from 'react';

const Form = ({addUser, userSelected, deselected, editData}) => {

    const[firstName, setFirstName] =useState("")
    const[lastName, setLastName] =useState("")
    const[email, setEmail] =useState("")
    const[password, setPassword] =useState("")
    const[birthday, setBirthday] =useState("")

    useEffect(()=>{
        if (userSelected !== null) {
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            reset();
        }
    },[userSelected])

    const submit = (e)=>{
        e.preventDefault();
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }

        if (userSelected === null) {
            addUser(userData);
            reset();
        }else{
            editData(userData);
            deselected();
        }
    }

    const reset = ()=>{
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }

    return (
        <div className='back-form'>
            <form action="" className='form' onSubmit={submit}>
                <a href="https://github.com/MalanFernando/UserCRUD" target="_blank" rel="noopener noreferrer">
                    <i className="github fa-brands fa-github"></i>
                </a>
                <div className='form-img'></div>
                <h2>Let's get started <span>Please sign in to continue</span></h2>
                <label className='form-name' htmlFor="name">
                    <i className="fa-solid fa-user-astronaut"></i>
                    <div className='name-input'>
                        <input required type="text" placeholder='First name' id='name' onChange={e =>setFirstName(e.target.value)} value={firstName}/>
                        <input required type="text" placeholder='Last name' onChange={e =>setLastName(e.target.value)} value={lastName}/>
                    </div>
                </label>
                <label htmlFor="email">
                    <i className="fa-solid fa-envelope"></i>
                    <input required type="email" placeholder='Email' id='email' onChange={e =>setEmail(e.target.value)} value={email}/>
                </label>
                <label htmlFor="password">
                    <i className="fa-solid fa-lock"></i>
                    <input required type="password" placeholder='Password' id='password' onChange={e =>setPassword(e.target.value)} value={password}/>
                </label>
                <label htmlFor="date">
                    <i className="fa-solid fa-calendar-day"></i>
                    <input required type="date" id='date' onChange={e =>setBirthday(e.target.value)} value={birthday}/>
                </label>
                <button className="btn-form upload">Upload</button>
                {
                    userSelected !== null && (
                        <button className="btn-form cancel" type='button' onClick={()=>deselected()}>Cancelar</button>
                    )
                }
            </form>
        </div>
    );
};

export default Form;