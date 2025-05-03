import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';
import TextInput from "@/Components/TextInput.jsx";

export default function Edit({ auth, user }) {
    const { data, setData, put, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name || "",
            email: user.email || "",
            password: "",
            roles: user.roles || "sales",
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('users.update', user.id),{
            preserveScroll: true,
            onSuccess: () => {
                alert('User berhasil dirubah.');
            }, onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit User
                </h2>
            }
        >
            <Head title="Edit User" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="max-w-xl">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Merubah data User
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Masukkan data user yang baru.
                                    </p>
                                </header>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Nama" />

                                        <TextInput
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="mt-1 block w-full rounded"
                                            required
                                        >
                                        </TextInput>

                                        <InputError className="mt-2" message={errors.name} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="email" value="Email" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="mt-1 block w-full rounded"
                                            required
                                        >
                                        </TextInput>

                                        <InputError className="mt-2" message={errors.email} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="password" value="Password" />

                                        <TextInput
                                            id="password"
                                            type="password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className="mt-1 block w-full rounded"
                                        >
                                        </TextInput>
                                        <InputError className="mt-2" message={errors.password} />
                                        <p className="text-sm text-gray-600">
                                            Kosongkan password jika tidak ingin merubah password.
                                        </p>
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="roles" value="Roles" />

                                        <select
                                            id="roles"
                                            value={data.roles}
                                            onChange={(e) => setData('roles', e.target.value)}
                                            className="mt-1 block w-full rounded"
                                            required
                                        >
                                            <option value="sales">Sales</option>
                                            <option value="admin">Admin</option>
                                            <option value="manager">Manager</option>
                                        </select>

                                        <InputError className="mt-2" message={errors.roles} />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                        <Link
                                            href={route('users.index')}
                                            className="text-sm text-gray-600 hover:text-gray-900 underline"
                                        >
                                            Kembali
                                        </Link>

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
