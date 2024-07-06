import React from 'react';

interface UserCardProps {
  user: {
    name: { first: string; last: string };
    gender: string;
    dob: {age: number}
    email: string;
    phone: string;
    picture: { large: string };
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="user-card">
    <div className="user-card-image">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
    </div>
    <div className="user-card-data">
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <h4>{`${user.gender}`} - {`${user.dob.age}`} anos</h4>
      <h4>{`${user.phone}`}</h4>
      <p>{user.email}</p>
    </div>
    
  </div>
);

export default UserCard;
