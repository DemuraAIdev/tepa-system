import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import Reporta from '@/Components/Report';
const Report = (reportData) => {
    console.log(reportData.data)
    return (
        <>
            <Head title="Report" />
            <Reporta data={reportData.data}/>
        </>
    )
}

Report.layout = page => <AuthLayout children={page} />

export default Report