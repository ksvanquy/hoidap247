'use client';

import { useState, useEffect } from 'react';

interface Permission {
  _id: string;
  action: string;
}

interface Role {
  _id: string;
  name: string;
  permissions: Permission[];
}

interface RoleFormProps {
  role?: Role;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RoleForm({ role, onClose, onSuccess }: RoleFormProps) {
  const [formData, setFormData] = useState({
    name: role?.name || '',
    permissionIds: role?.permissions.map(p => p._id) || [],
  });
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      const response = await fetch('http://localhost:3001/permissions');
      if (!response.ok) throw new Error('Failed to fetch permissions');
      const data = await response.json();
      setPermissions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch permissions');
    }
  };

  const handlePermissionToggle = async (permissionId: string) => {
    if (!role) {
      // For new roles, just update the local state
      setFormData(prev => ({
        ...prev,
        permissionIds: prev.permissionIds.includes(permissionId)
          ? prev.permissionIds.filter(id => id !== permissionId)
          : [...prev.permissionIds, permissionId]
      }));
      return;
    }

    const isAdding = !formData.permissionIds.includes(permissionId);
    const newPermissionIds = isAdding
      ? [...formData.permissionIds, permissionId]
      : formData.permissionIds.filter(id => id !== permissionId);

    try {
      setLoading(true);
      setError(null);

      const endpoint = isAdding
        ? `http://localhost:3001/roles/${role._id}/permissions`
        : `http://localhost:3001/roles/${role._id}/permissions/remove`;

      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          permissionIds: [permissionId],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update permissions');
      }

      setFormData(prev => ({
        ...prev,
        permissionIds: newPermissionIds,
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update permissions');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (role) {
        // For existing roles, we only need to update permissions
        // The role name update is not supported by the backend
        onSuccess();
      } else {
        // Create new role
        const roleResponse = await fetch('http://localhost:3001/roles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            permissionIds: formData.permissionIds,
          }),
        });

        if (!roleResponse.ok) {
          const errorData = await roleResponse.json();
          throw new Error(errorData.message || 'Failed to create role');
        }

        onSuccess();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save role');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          {role ? 'Edit Role' : 'Create New Role'}
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Role Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., admin, teacher, student"
              required
              disabled={isSubmitting || !!role}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Permissions
            </label>
            <div className="max-h-60 overflow-y-auto p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              {permissions.map((permission) => (
                <div key={permission._id} className="flex items-center py-1">
                  <input
                    type="checkbox"
                    id={`permission-${permission._id}`}
                    checked={formData.permissionIds.includes(permission._id)}
                    onChange={() => handlePermissionToggle(permission._id)}
                    className="mr-2"
                    disabled={loading || isSubmitting}
                  />
                  <label
                    htmlFor={`permission-${permission._id}`}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {permission.action}
                  </label>
                </div>
              ))}
            </div>
          </div>

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
              {isSubmitting ? 'Saving...' : role ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 