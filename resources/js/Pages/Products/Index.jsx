import {Head, Link, router, usePage} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Pagination from '@/Components/Pagination';

export default function Index() {
    const { products, auth } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Daftar Produk
                </h2>
            }
        >
            <Head title="Produk" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-2">
                        <Link href={route("products.create")} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            Tambah Produk
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Nama</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Harga</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Deskripsi</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {products.data.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-gray-500">
                                            Tidak ada data Produk yang terdaftar.
                                        </td>
                                    </tr>
                                ) : (
                                    products.data.map((product) => (
                                        <tr key={product.id} className="border-b">
                                            <td className="px-6 py-3 whitespace-nowrap">{product.name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">Rp {product.price.toLocaleString('id-ID')}</td>
                                            <td className="px-6 py-3 whitespace-normal break-words max-w-xs">{product.description}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <Link href={route("products.edit", product.id)} className="bg-yellow-500 text-white px-4 py-2 rounded">
                                                    Edit
                                                </Link>

                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                            <Pagination links={products.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
