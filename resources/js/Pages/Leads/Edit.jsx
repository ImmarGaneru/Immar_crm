import {Head, useForm} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

export default function Edit({ lead }) {
    const { data, setData, put, processing, errors, recentlySuccessful } = useForm({
        name: lead.name || '',
        email: lead.email || '',
        phone: lead.phone || '',
        address: lead.address || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('leads.update', lead.id));
    };

    return (
        <AuthenticatedLayout
            header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Lead</h2>
            }>
            <Head title="Edit Lead" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoComplete="name"
                                />
                                <InputError className="mt-2" message={errors.name} />
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoComplete="username"
                                />
                                <InputError className="mt-2" message={errors.email} />
                            </div>
                            <div>
                                <InputLabel htmlFor="phone" value="No. Telp" />
                                <TextInput
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="tel"
                                />
                                <InputError message={errors.phone} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="address" value="Alamat"/>
                                <TextInput
                                    id="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData('address', e.target.value)
                                    }
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="street-address"
                                />
                                <InputError message={errors.address} className="mt-2"/>
                            </div>
                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Simpan Perubahan</PrimaryButton>
                                <SecondaryButton type="button" onClick={() => window.history.back()} disabled={processing}>Batal</SecondaryButton>

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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
