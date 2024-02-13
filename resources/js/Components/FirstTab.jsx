import { Link, useForm, usePage } from '@inertiajs/react';
import InputError from './Form/InputError';

const FirstTab = () => {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        productid: '',
        jumlah: '',
        type: 'sell',
    });

    function handleSubmit(e) {
        e.preventDefault()
        post(route('selling.store'), {
            onSuccess: () => {
                reset();
            }
        })
    }


    return (
        <div className="w-full rounded-xl md:p-7 py-7 px-0">
            <form>
                {recentlySuccessful && (
                    <div className="alert alert-success my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Your data has been saved</span>
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    <input
                        type="Number"
                        name="productid"
                        id="productid"
                        placeholder="Product ID"
                        onChange={(e) => setData('productid', e.target.value)}
                        value={data.productid}
                        className="py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
                    />
                    <InputError message={errors.productid} className="mt-2" />

                    <input
                        type="Number"
                        name="jumlah"
                        id="jumlah"
                        placeholder="Product Amount"
                        onChange={(e) => setData('jumlah', e.target.value)}
                        value={data.jumlah}
                        className="py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
                    />
                    <InputError message={errors.jumlah} className="mt-2" />
                </div>
                <div className="flex items-center justify-center pt-10">
                    <button className="bg-indigo-600 py-2 px-24 rounded-xl text-white" type='submit' value="send" 
                    onClick={handleSubmit} disabled={processing}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FirstTab;