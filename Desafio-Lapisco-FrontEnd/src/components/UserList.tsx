import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const loadUsers = async (pageNumber: number) => {
    console.log(`Loading users for page: ${pageNumber}`);
    setLoading(true);
    try {
      const newUsers = await getUsers(pageNumber);
      console.log('New users loaded:', newUsers);
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    } catch (error) {
      console.error('Error loading users:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  useEffect(() => {
    const results = users.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
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
        <div className="BarContainer">
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
