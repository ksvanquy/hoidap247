'use client';

import { useState, useEffect } from 'react';

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

interface UserFormProps {
  user?: User;
  onClose: () => void;
  onSuccess: () => void;
}

export default function UserForm({ user, onClose, onSuccess }: UserFormProps) {
  const [formData, setFormData] = useState({
    email: user?.email || '',
    username: user?.username || '',
    password: '',
    roleIds: user?.roles?.map(role => 
      typeof role === 'string' ? role : role._id
    ) || [],
  });
  const [roles, setRoles] = useState<Role[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch('http://localhost:3001/roles');
      if (!response.ok) throw new Error('Failed to fetch roles');
      const data = await response.json();
      setRoles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch roles');
    }
  };

  const handleRoleToggle = async (roleId: string) => {
    if (!user) {
      // For new users, just update the local state
      setFormData(prev => ({
        ...prev,
        roleIds: prev.roleIds.includes(roleId)
          ? prev.roleIds.filter(id => id !== roleId)
          : [...prev.roleIds, roleId]
      }));
      return;
    }

    const isAdding = !formData.roleIds.includes(roleId);
    const newRoleIds = isAdding
      ? [...formData.roleIds, roleId]
      : formData.roleIds.filter(id => id !== roleId);

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch(`http://localhost:3001/users/${user._id}/roles`, {
        method: isAdding ? 'PUT' : 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roleIds: [roleId],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${isAdding ? 'assign' : 'remove'} role`);
      }

      setFormData(prev => ({
        ...prev,
        roleIds: newRoleIds,
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update roles');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create or update user
      const response = await fetch(
        user ? `http://localhost:3001/users/${user._id}` : 'http://localhost:3001/users',
        {
          method: user ? 'PATCH' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            username: formData.username,
            ...(formData.password && { password: formData.password }),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save user');
      }

      const savedUser = await response.json();

      // If there are selected roles and it's a new user, assign roles
      if (formData.roleIds.length > 0) {
        const rolesResponse = await fetch(`http://localhost:3001/users/${savedUser._id}/roles`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            roleIds: formData.roleIds,
          }),
        });

        if (!rolesResponse.ok) {
          const errorData = await rolesResponse.json();
          throw new Error(errorData.message || 'Failed to assign roles');
        }
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          {user ? 'Edit User' : 'Create New User'}
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="user@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter username"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder={user ? 'Leave blank to keep current password' : 'Enter password'}
              required={!user}
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Roles
            </label>
            <div className="max-h-40 overflow-y-auto p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              {roles.map((role) => (
                <div key={role._id} className="flex items-center py-1">
                  <input
                    type="checkbox"
                    id={`role-${role._id}`}
                    checked={formData.roleIds.includes(role._id)}
                    onChange={() => handleRoleToggle(role._id)}
                    className="mr-2"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor={`role-${role._id}`}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {role.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {user?.roles && user.roles.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Permissions
              </label>
              <div className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Role Permissions:
                </div>
                <div className="space-y-1">
                  {user.roles.flatMap(role => {
                    if (typeof role === 'string') {
                      const fullRole = roles.find(r => r._id === role);
                      return fullRole?.permissions?.map(permission => (
                        <div key={`${fullRole._id}-${permission._id}`} className="text-sm text-gray-700 dark:text-gray-300">
                          {permission.action}
                        </div>
                      )) || [];
                    }
                    return role.permissions?.map(permission => (
                      <div key={`${role._id}-${permission._id}`} className="text-sm text-gray-700 dark:text-gray-300">
                        {permission.action}
                      </div>
                    )) || [];
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : user ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 