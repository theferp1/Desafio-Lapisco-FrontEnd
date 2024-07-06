import React from 'react';
import { UserCardProps } from '../types/User';

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
