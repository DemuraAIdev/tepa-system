import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/Form/TextInput';
import InputError from '@/Components/Form/InputError';

const Login = () => {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };
    return (
        <>
            <Head title="Forgot Password" />
            <div className="bg-white h-[100vh] w-full flex items-center justify-center p-7">
                <div className="shadow-cstm2 md:p-7 rounded-xl ">
                    {status && <div className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{status}</span>
                    </div>
                    }

                    <div className="judul text-center p-2">
                        <h1 className="text-2xl font-body font-bold text-gray-800">
                            Forgot Password
                        </h1>
                        <p className="text-gray-700">
                        Forgot your password? No problem.
                        </p>
                    </div>



                    <div className="flex items-center justify-center py-7 px-4">
                        <form onSubmit={submit}>
                            <InputError message={errors.email} className="my-2 lg:w-[50vh] sm:w-[50vh] p-2" />
                            <table>
                                <thead>
                                    <tr>
                                        <td className="py-2">
                                            <TextInput
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                id="email"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Enter your email " />

                                        </td>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <td className="pt-4">
                                            <input
                                                className=" btn text-gray-100 bg-indigo-500 border-[1px] border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 p-2 rounded-md w-full"
                                                type="submit"
                                                id="submit"
                                                disabled={processing}
                                                name="submit"
                                                value="Send" />
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login