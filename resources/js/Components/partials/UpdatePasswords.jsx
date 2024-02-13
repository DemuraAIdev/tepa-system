import { useRef } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '../Form/InputError';
export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <>
            <header>
                <h2 className="text-lg font-medium">Update Password</h2>

                <p className="mt-1 text-sm ">
                    Ensure your account is using a long, random <br/> password to stay secure.
                </p>
            </header>
            {recentlySuccessful && (
                <div className="alert alert-success my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your Password Updated</span>
                </div>
            )}
            <form onSubmit={updatePassword} className="mt-6 ">
            <div className="form-control w-full max-w-xs gap-5">
                <input type="password" 
                className="input input-bordered w-full max-w-xs" name="current_password" onChange={(e) => setData('current_password', e.target.value)} value={data.current_password} ref={currentPasswordInput} placeholder='Current Password' id="current_password" autoComplete='current-password' />
                <InputError message={errors.current_password} className="mt-2" />

                <input
                    id="password"
                    ref={passwordInput}
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    type="password"
                    placeholder='New Password'
                    className="input input-bordered w-full max-w-xs" 
                    autoComplete="new-password"
                />
                <InputError message={errors.password} className="mt-2" />

                <input
                    id="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    type="password"
                    placeholder='Confirm Password'
                    className="input input-bordered w-full max-w-xs" 
                    autoComplete="new-password"
                />
                <InputError message={errors.password_confirmation} className="mt-2" />



                <button
                    type='submit'
                    value="Submit"
                    disabled={processing}
                    className='btn btn-primary border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                >
                    Save
                </button>
            </div>
            </form>
        </>
    )
}
