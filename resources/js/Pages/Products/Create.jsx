import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';

export default function Create({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            price: "",
            description: "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('products.store'),{
            preserveScroll: true,
            onSuccess: () => {
                alert('Produk berhasil ditambahkan.');
            }, onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Produk
                </h2>
            }
        >
            <Head title="Tambah Produk" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="max-w-xl">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Menambahkan Produk Baru
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukkan data untuk produk baru.
                                    </p>
                                </header>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Nama Produk" />

                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="name"
                                        />

                                        <InputError className="mt-2" message={errors.name} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="price" value="Harga Produk" />
                                        <TextInput
                                            id="price"
                                            className="mt-1 block w-full"
                                            value={data.price}
                                            onChange={(e) => setData('price', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="price"
                                        />
                                        <InputError className="mt-2" message={errors.price} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="description" value="Deskripsi Produk" />
                                        <textarea
                                            id="description"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-md"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            required
                                            autoComplete="description"
                                        />
                                        <InputError className="mt-2" message={errors.description} />
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
