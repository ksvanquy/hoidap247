'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import UserForm from '@/components/UserForm';

interface Permission {
  _id: string;
  action: string;
}

interface Role {
  _id: string;
  name: string;
  permissions?: Permission[];
}

interface User {
  _id: string;
  email: string;
  username: string;
  roles?: string[] | Role[];
  permissions?: Permission[];
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

  useEffect(() => {
    fetchUsersAndRoles();
  }, []);

  const fetchUsersAndRoles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch both users and roles in parallel
      const [usersResponse, rolesResponse] = await Promise.all([
        fetch('http://localhost:3001/users'),
        fetch('http://localhost:3001/roles')
      ]);

      if (!usersResponse.ok) throw new Error('Failed to fetch users');
      if (!rolesResponse.ok) throw new Error('Failed to fetch roles');

      const usersData = await usersResponse.json();
      const rolesData = await rolesResponse.json();
      
      setRoles(rolesData);
      
      // Map the users data to include full role objects
      const usersWithRoles = usersData.map((user: User) => ({
        ...user,
        roles: Array.isArray(user.roles) 
          ? user.roles.map(roleId => 
              rolesData.find((r: Role) => r._id === roleId)
            ).filter(Boolean)
          : []
      }));

      setUsers(usersWithRoles);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    // Ensure we pass the user with complete role objects to the form
    const userWithFullRoles = {
      ...user,
      roles: Array.isArray(user.roles) 
        ? user.roles.map(roleId => 
            typeof roleId === 'string' 
              ? roles.find(r => r._id === roleId)
              : roleId
          ).filter(Boolean)
        : []
    };
    setSelectedUser(userWithFullRoles as User);
    setShowForm(true);
  };

  const handleDelete = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete user');
      }

      setUsers(users.filter(user => user._id !== userId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedUser(undefined);
    fetchUsersAndRoles();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
          <button
            onClick={() => {
              setSelectedUser(undefined);
              setShowForm(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create New User
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Roles
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Permissions
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {user.username}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  <div className="space-y-1">
                    {Array.isArray(user.roles) && user.roles.map((role) => (
                      <div key={typeof role === 'string' ? role : role._id}>
                        {typeof role === 'string' 
                          ? roles.find(r => r._id === role)?.name || 'Unknown Role'
                          : role.name
                        }
                      </div>
                    )) || 'No roles assigned'}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  <div className="space-y-1">
                    {Array.isArray(user.roles) && user.roles.length > 0 ? (
                      user.roles.flatMap(role => {
                        if (typeof role === 'string') {
                          const fullRole = roles.find(r => r._id === role);
                          return fullRole?.permissions?.map(permission => (
                            <div key={`${fullRole._id}-${permission._id}`}>{permission.action}</div>
                          )) || [];
                        }
                        return role.permissions?.map(permission => (
                          <div key={`${role._id}-${permission._id}`}>{permission.action}</div>
                        )) || [];
                      })
                    ) : (
                      'No permissions'
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <UserForm
          user={selectedUser}
          onClose={() => {
            setShowForm(false);
            setSelectedUser(undefined);
          }}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
} 