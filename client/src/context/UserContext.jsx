import React from 'react';
import { useEffect, useState } from 'react';
// Data
import { sampleUserData } from '../users/utils/utils';
import LoggedInUser from '../users/utils/LoggedInUser';
// Fetch
import client from '../utils/axios/client';
// Context
export const UserContext = React.createContext();

const initUserState = sampleUserData;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState);
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );
  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  useEffect(() => {
    const decodedUserData = LoggedInUser();

    if (decodedUserData) {
      const userId = decodedUserData.id;

      client
        .get(`/users/${userId}`)
        .then((res) => {
          setUser(res.data.data.user);
        })
        .catch((err) => {
          console.error('Unable to retrieve user data', err);
        });
    }

    const cookie = localStorage.getItem('CookiePolicy');

    if (cookie) {
      setToggleCookiePolicy(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        toggleCookiePolicy,
        setToggleCookiePolicy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
