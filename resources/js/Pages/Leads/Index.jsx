import {Head, Link, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Pagination from '@/Components/Pagination';

export default function Index() {
    const { leads } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Leads
                </h2>
            }
        >
            <Head title="Leads" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-2">
                        <Link href="/sales/leads/create" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            Tambah Lead
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Nama</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Email</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">No. HP</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Alamat</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {leads.data.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-gray-500">
                                            Tidak ada data leads.
                                        </td>
                                    </tr>
                                ) : (
                                    leads.data.map((lead) => (
                                        <tr key={lead.id} className="border-b">
                                            <td className="px-6 py-3 whitespace-nowrap">{lead.name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{lead.email}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{lead.phone}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{lead.address}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <Link href={`/sales/leads/${lead.id}/edit`} className="bg-blue-500 text-white px-4 py-2 rounded">
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        if (confirm('Apakah kamu yakin ingin menghapus lead ini?')) {
                                                            router.delete(route('leads.destroy', lead.id));
                                                        }
                                                    }}
                                                    className="bg-red-500 text-white px-3.5 py-1.5 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                            <Pagination links={leads.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
