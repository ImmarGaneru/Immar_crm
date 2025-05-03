import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router, useForm, usePage} from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

export default function Show({}) {
    const { project, userRole } = usePage().props;

    const handleApprove = () => {
        if (confirm('Apakah anda yakin ingin menyetujui proyek ini?')) {
            router.put(route('projects.approve', project.id));
        }
    }

    const handleReject = () => {
        if (confirm('Apakah anda yakin ingin menolak project ini?')) {
            router.put(route('projects.reject', project.id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Detail Proyek
                </h2>
            }
        >
            <Head title="Detail Proyek" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="max-w-xl">
                                <header>
                                    <h2 className="text-xl font-medium text-gray-900">
                                        Detail data Proyek
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Detail data proyek yang ada.
                                    </p>
                                </header>
                                <div className="mt-6 space-y-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Detail Lead
                                    </h3>
                                    <p className="mb-1"><strong>Nama: </strong> {project.lead.name}</p>
                                    <p className="mb-1"><strong>Email: </strong> {project.lead.email}</p>
                                    <p className="mb-1"><strong>No. Hp: </strong> {project.lead.phone}</p>
                                    <p className="mb-1"><strong>Alamat :</strong> {project.lead.address}</p>

                                    <hr className="my-6"/>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Detail Produk
                                    </h3>
                                    <p className="mb-1"><strong>Nama: </strong> {project.product.name}</p>
                                    <p className="mb-1"><strong>Harga: Rp</strong> {project.product.price}</p>
                                    <p className="mb-1"><strong>Deskripsi: </strong> {project.product.description}</p>

                                    <hr className="my-6"/>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Detail Sales
                                    </h3>
                                    <p className="mb-1"><strong>Nama: </strong> {project.sales.name}</p>
                                    <p className="mb-1"><strong>Email: </strong> {project.sales.email}</p>

                                    <hr className="my-6"/>

                                    <p className="mb-1"><strong>Status:</strong> {project.status}</p>
                                    {project.status !== 'pending' && (
                                        <p className="mb-1"><strong>Disetujui oleh:</strong> {project.approved_by.name}</p>
                                    )}

                                    <div className="mt-8 flex justify-between items-center">
                                        <Link href={route('projects.index')} className="text-gray-600 hover:text-gray-800 underline">
                                            Kembali
                                        </Link>
                                        {userRole === 'manager' && project.status === 'pending' && (
                                        <div className="mt-4 flex gap-2">
                                            <button onClick={handleApprove} className="bg-green-500 text-white px-4 py-2 rounded">Terima</button>
                                            <button onClick={handleReject} className="bg-red-500 text-white px-4 py-2 rounded">Tolak</button>
                                        </div>
                                    )}
                                    </div>



                                </div>

                                    {/*<div className="flex items-center gap-4">*/}
                                    {/*    <PrimaryButton disabled={processing}>Save</PrimaryButton>*/}

                                    {/*    <Transition*/}
                                    {/*        show={recentlySuccessful}*/}
                                    {/*        enter="transition ease-in-out"*/}
                                    {/*        enterFrom="opacity-0"*/}
                                    {/*        leave="transition ease-in-out"*/}
                                    {/*        leaveTo="opacity-0"*/}
                                    {/*    >*/}
                                    {/*        <p className="text-sm text-gray-600">*/}
                                    {/*            Saved.*/}
                                    {/*        </p>*/}
                                    {/*    </Transition>*/}
                                    {/*</div>*/}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
