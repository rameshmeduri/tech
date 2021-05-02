import React, { createContext, useContext, useState } from 'react';
import './style.css';

const ProfileContext = createContext();

const initData = {
  company: 'Progress',
  companyImage: 'https://svgshare.com/i/9ir.svg',
  url: 'https://www.telerik.com/kendo-react-ui/',
  userImage: 'https://i.imgur.com/Y1XRKLf.png',
  userName: 'Kendoken',
  fullName: 'Kendoken No Michi',
  team: 'KendoReact',
};

const ProfileProvider = ({children}) => {
  const userInformation = {
    ...initData,    
    toggleTeam: (property, value) => {
      setUserInfo(
        { ...userInfo, [property]: value }
      );
    }
  };

  const [userInfo, setUserInfo] = useState(userInformation);

  return (
    <ProfileContext.Provider value={userInfo}>
      {children}
    </ProfileContext.Provider>
  )
};

const Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  )
};

const ChangeTeam = () => {
  const context = useContext(ProfileContext);
  return (
    <>
      <button className="profile-button"
        onClick={() => context.toggleTeam('team', 'KendoAngular')}>Angular</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('team', 'KendoVue')}>Vue</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('team', 'KendoReact')}>React</button>
    </>
  )
};

const User = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <p className="profile-fullName">({context.fullName})</p>
      <Team />
      <ChangeTeam />
    </div>
  )
};

const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="profile">
      <img src={context.companyImage} />
      <User />
    </div>
  )
};

const App = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
);

export default App;
