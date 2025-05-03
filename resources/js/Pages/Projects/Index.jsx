import {Head, Link, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Pagination from '@/Components/Pagination';

export default function Index({ projects }) {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Proyek
                </h2>
            }
        >
            <Head title="Proyek" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-2">
                        {auth.user.roles === 'sales' && (
                            <Link href={route("projects.create")} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                Tambah Proyek
                            </Link>
                        )}
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Lead</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Produk</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Sales</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Status</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Disetujui Oleh</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {projects.data.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-gray-500">
                                            Tidak ada data Projects.
                                        </td>
                                    </tr>
                                ) : (
                                    projects.data.map((project) => (
                                        <tr key={project.id} className="border-b">
                                            <td className="px-6 py-3 whitespace-nowrap">{project.lead?.name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{project.product?.name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{project.sales?.name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{project.status}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{project.approved_by?.name || '-'}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <Link href={route("projects.show", project.id)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                                    Detail
                                                </Link>

                                                {auth.user.roles === 'sales' && project.status === 'pending' && (
                                                    <Link href={route("projects.edit", project.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">
                                                        Edit
                                                    </Link>
                                                )}

                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                            <Pagination links={projects.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
