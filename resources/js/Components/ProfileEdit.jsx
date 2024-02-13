import { Link, useForm, usePage } from '@inertiajs/react';
import InputError from './Form/InputError';
import UpdatePasswordForm from '@/Components/partials/UpdatePasswords';

const ProfileEdit = () => {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <div className=' bg-slate-700 p-7 rounded-md'>
            <h2 className="text-lg font-medium">Edit profile</h2>

            <p className="mt-1 mb-5 text-sm">
            Update your account's profile information and <br/>email address.
            </p>
            {recentlySuccessful && (
                <div className="alert alert-success my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your profile has been saved</span>
                </div>
            )}
            <form onSubmit={submit}>
                <div className="form-control w-full max-w-xs gap-5">

                    <input type="text" id="name" name="name" placeholder="Name" required
                        autoComplete="username" onChange={(e) => setData('name', e.target.value)} value={data.name} className="input input-bordered w-full max-w-xs" />
                    <InputError message={errors.name} className="mt-2" />

                    <input type="email" id="email" name="email" onChange={(e) => setData('email', e.target.value)} value={data.email} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <InputError message={errors.email} className="mt-2" />
                    <button
                        type='submit'
                        value="Submit"
                        // disabled={processing}
                        className='btn btn-primary border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                    >
                        Edit
                    </button>
                </div>
            </form>
            <div className=" mt-8   shadow ">
                <UpdatePasswordForm />
            </div>
        </div>
    )
}

export default ProfileEdit