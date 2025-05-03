import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import { Link } from '@inertiajs/react';

export default function Index({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-2">
                        <label className='font-bold'>Jumlah User: {users.total}</label>
                        <Link
                            href={route('users.create')}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Create User
                        </Link>

                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <table className='min-w-full'>
                                <thead>
                                <tr className='border-b-2'>
                                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>#</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Name</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Email</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Role</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.data.length === 0 ? (
                                    <tr>
                                        <td className="px-4 py-2 border text-center" colSpan="5">
                                            Tidak ada data user.
                                        </td>
                                    </tr>
                                ) : (
                                    users.data.map((user, index) => (
                                        <tr key={user.id} className='border-b'>
                                            <td className='px-6 py-3 whitespace-nowrap'>
                                                {index + 1}
                                            </td>
                                            <td className='px-6 py-3 whitespace-nowrap'>
                                                {user.name}
                                            </td>
                                            <td className='px-6 py-3 whitespace-nowrap'>
                                                {user.email}
                                            </td>
                                            <td className='px-6 py-3 whitespace-nowrap'>
                                                {user.roles}
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <Link
                                                    href={route('users.edit', user.id)}
                                                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
