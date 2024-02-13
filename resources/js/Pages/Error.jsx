
export default function ErrorPage({ status }) {
    const title = {
        503: '503: Service Unavailable',
        500: '500: Server Error',
        404: '404: Page Not Found',
        403: '403: Forbidden',
      }[status]
    
      const description = {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
      }[status]
    return (
        <div className="bg-neutral p-7 min-h-screen w-full flex items-center justify-center">
            <div className="flex flex-col gap-4 md:w-[50%] text-center items-center">
                <p className="text-gray-300">{title}</p>
                <h1 className="text-white text-4xl font-body font-bold">
                    {description}
                </h1>
                <p>
                    Alamak bang, we cannot find the page you are looking for. Perhaps you are mistyped the URL? Be sure to check your spelling.
                </p>
                <a className="text-white">
                    <button className="py-2 px-7 rounded-full bg-indigo-500 hover:bg-indigo-600 hover:scale-105 Transition-all duration-300">
                        Go back
                    </button>
                </a>
            </div>
        </div>
    )
}