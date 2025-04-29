import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <Link 
            href="/"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Users Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Users</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Manage system users and permissions</p>
            <Link 
              href="/dashboard/users"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Manage Users
            </Link>
          </div>

          {/* Roles Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Roles</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Manage roles and their permissions</p>
            <Link 
              href="/dashboard/roles"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Manage Roles
            </Link>
          </div>

          {/* Permissions Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Permissions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Manage system permissions</p>
            <Link 
              href="/dashboard/permissions"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Manage Permissions
            </Link>
          </div>

          {/* Settings Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Settings</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Configure system settings and preferences</p>
            <Link 
              href="/dashboard/settings"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Configure
            </Link>
          </div>

          {/* Analytics Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">View system usage and performance metrics</p>
            <Link 
              href="/dashboard/analytics"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Analytics
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 