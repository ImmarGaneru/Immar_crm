import {Head, Link, router} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Pagination from '@/Components/Pagination';
import { useState } from 'react';

export default function Index({ leads }) {
    const [selectedLead, setSelectedLead] = useState(null);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Customer
                </h2>
            }
        >
            <Head title="Customer" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Nama</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Email</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">No. Telepon</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Alamat</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {leads.data.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-gray-500">
                                            Tidak ada data Projects.
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
                                                <button
                                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                                    onClick={() =>
                                                        setSelectedLead(
                                                            selectedLead?.id === lead.id ? null : lead
                                                        )
                                                    }
                                                >
                                                    {selectedLead?.id === lead.id ? 'Tutup' : 'Lihat Detail'}
                                                </button>
                                                {/*<Link href={route("projects.show", project.id)} className="bg-blue-500 text-white px-4 py-2 rounded">*/}
                                                {/*    Detail*/}
                                                {/*</Link>*/}

                                                {/*{auth.user.roles === 'sales' && project.status === 'pending' && (*/}
                                                {/*    <Link href={route("projects.edit", project.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">*/}
                                                {/*        Edit*/}
                                                {/*    </Link>*/}
                                                {/*)}*/}

                                            </td>
                                        </tr>
                                    ))
                                )}

                                {selectedLead && (
                                    <tr className="bg-gray-50 botder-t">
                                        <td colSpan="5" className="p-4">
                                            <h3 className="text-md font-semibold mb-2">
                                                Produk yang dimiliki oleh {selectedLead.name}
                                            </h3>
                                            {selectedLead.projects.length > 0 ? (
                                                <ul className="list-disc list-inside text-sm text-gray-800">
                                                    {selectedLead.projects.map((project) => (
                                                        <li key={project.id}>
                                                            <strong>{project.product.name}</strong> - Rp{project.product.price.toLocaleString()}
                                                            <p className="text-gray-600 text-sm">
                                                                {project.product.description}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm text-gray-600">Belum ada produk</p>
                                            )}
                                        </td>
                                    </tr>
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
