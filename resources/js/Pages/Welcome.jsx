import { Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Smart-Net</h1>
                    <div>
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                                Dashboard
                            </Link>
                        ) : (
                            <Link href={route('login')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-grow">
                <section className="text-center py-20 bg-white">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Sistem CRM untuk PT. Smart</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Membantu divisi sales dalam mengelola data calon customer, produk layanan internet, penjualan, dan pelanggan secara efisien.
                    </p>
                </section>

                {/* Features */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Manajemen Calon Customer</h3>
                            <p className="text-gray-600">CRUD data calon customer (lead) yang dilakukan oleh tim sales.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Master Produk Layanan</h3>
                            <p className="text-gray-600">Admin dapat mengatur dan memperbarui daftar layanan internet yang tersedia.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Approval Proyek</h3>
                            <p className="text-gray-600">Manager menyetujui proyek pemasangan layanan dari tim sales.</p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-2">Data Pelanggan</h3>
                            <p className="text-gray-600">Melihat pelanggan yang telah berlangganan dan layanan apa saja yang digunakan.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white shadow text-center py-4 text-sm text-gray-500">
                © 2025 Smart-Net. All rights reserved.
            </footer>
        </div>
    );
}
