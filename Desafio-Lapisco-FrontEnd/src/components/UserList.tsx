import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import { User} from '../types/User';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const loadUsers = async (pageNumber: number) => {
    setLoading(true);
    try {
      const newUsers = await getUsers(pageNumber);
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    } catch (error) {
      console.error('Error loading users:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);
  
  const handleFilterUsers = () => {
    const results = users.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }

  useEffect(() => {
    handleFilterUsers();
  }, [searchTerm, users]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="user-list-container">
      <div className="search-bar-container">
        <div className="container-bar">
          <SearchBar onSearch={setSearchTerm} />
        </div>
      </div>
      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default UserList;
