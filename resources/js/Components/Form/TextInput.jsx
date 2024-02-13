import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'bg-white border-[1px] autofill:bg-white border-gray-500 p-2 rounded-md lg:w-[50vh] sm:w-[50vh] text-gray-700 ' +
                className
            }
            ref={input}
        />
    );
});
