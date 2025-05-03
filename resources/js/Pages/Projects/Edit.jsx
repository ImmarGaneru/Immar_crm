import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

export default function Edit({ project, leads, products }) {
    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            lead_id: project.lead_id,
            product_id: project.product_id,
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('projects.update', project.id),{
            preserveScroll: true,
            onSuccess: () => {
                alert('Proyek berhasil dirubah.');
            }, onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Proyek
                </h2>
            }
        >
            <Head title="Edit Proyek" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="max-w-xl">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Merubah data Proyek
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukkan data proyek yang baru.
                                    </p>
                                </header>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="lead_id" value="Lead" />

                                        <select
                                            id="lead_id"
                                            value={data.lead_id}
                                            onChange={(e) => setData('lead_id', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded"
                                        >
                                            {leads.map((lead) => (
                                                <option key={lead.id} value={lead.id}>
                                                    {lead.name} ({lead.email})
                                                </option>
                                            ))}
                                        </select>

                                        <InputError className="mt-2" message={errors.lead_id} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="product_id" value="Produk" />
                                        <select
                                            id="product_id"
                                            value={data.product_id}
                                            onChange={(e) => setData('product_id', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded"
                                        >
                                            <option value="">Pilih Produk</option>
                                            {products.map((product) => (
                                                <option key={product.id} value={product.id}>
                                                    {product.name}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError className="mt-2" message={errors.product_id} />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
