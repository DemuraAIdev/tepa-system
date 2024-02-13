import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import ProfileEdit from '@/Components/ProfileEdit';

const Profile = () => {
    
    return (
        <div className='flex items-center justify-center '>
            <Head title="Profile" />
            <   ProfileEdit/>
        </div>
    )
}

Profile.layout = page => <AuthLayout children={page} />

export default Profile