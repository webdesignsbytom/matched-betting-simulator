import React, { useContext, useEffect, useState } from 'react'
// Components
import FormInput from '../../components/forms/FormInput';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';

function Account() {
  const { user } = useContext(UserContext);
  const [formKeys, setFormKeys] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newUserData, setNewUserData] = useState({})

  const profile = user.profile;

  useEffect(() => {
    if (isUpdating) {
      setFormKeys({});
    } else {
      setFormKeys([]);
    }
  }, [isUpdating]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const currentUser = {...user}

    setNewUserData({
      ...newUserData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username,
      email,
      password,
      firstname,
      lastname,
      biography,
      profileImgUrl } = newUserData
      console.log('newUserDataXX', newUserData);

    // const token = localStorage.getItem('token');
    // console.log('MY BIG TOKEN', token);

    // const res = await fetch('http://localhost:4000/post', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',        
    //     // 'authorization': `Bearer ${token}`
    //   },
    //   body: JSON.stringify(newPostArticle),
    // });
    // console.log('res', res);
    // const newPostData = await res.json();
  }

  const setUpdating = () => {
    setIsUpdating(!isUpdating);
  };

  return (
    <>
      <Navbar />
      <main className='account__container'>
        <div className='account__header__container'>
          <h2>Account</h2>
        </div>

        {!isUpdating && (
          <article className='account__profile__container'>
            <div className='profile__image__container'>
              <img src={user.profile.profileImgUrl} alt={user.username} />
            </div>

            <div className='profile__data__container'>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.profile.firstname}</p>
              <p>{user.profile.lastname}</p>
              <p>{user.profile.betHistory} = [ ]</p>
              <p>£ {user.profile.bank}</p>
            </div>

            <button onClick={setUpdating}>Update</button>
          </article>
        )}
        {formKeys.length > 0 && (
          <article className='account__profile__container'>
            <button onClick={setUpdating}>X</button>
            <ul>
              {formKeys.map((key, index) => (
                <li key={index}>
                  <FormInput name={key} value={key} handleChange={handleChange} />
                </li>
              ))}
              <button onClick={handleSubmit}>Update</button>
            </ul>
          </article>
        )}
      </main>
    </>
  );
}

export default Account;
