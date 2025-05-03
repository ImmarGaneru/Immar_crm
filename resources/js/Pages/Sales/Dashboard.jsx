import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ leadCount, acceptedCount, rejectedCount }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Sales Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="bg-white p-6 shadow rounded">
                            <h3 className="text-lg font-semibold text-gray-700">Total Lead</h3>
                            <p className="text-3xl font-bold text-blue-600">{leadCount}</p>
                        </div>
                        <div className="bg-white p-6 shadow rounded">
                            <h3 className="text-lg font-semibold text-gray-700">Proyek Diterima</h3>
                            <p className="text-3xl font-bold text-green-600">{acceptedCount}</p>
                        </div>
                        <div className="bg-white p-6 shadow rounded">
                            <h3 className="text-lg font-semibold text-gray-700">Proyek Ditolak</h3>
                            <p className="text-3xl font-bold text-red-600">{rejectedCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
