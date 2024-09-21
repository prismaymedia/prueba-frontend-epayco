import { InputProps } from '@/shared/types';
import clsx from 'clsx';

const TextArea = (props: InputProps) => {
    const { placeholder, register, error, errorMessage} = props;
    
    return (
        <>
            <textarea   
                className={
                    clsx('text-sm block py-2 px-3 leading-5 w-full border-2 rounded-lg shadow-sm', 
                        error ? 
                        'border-rose-600 text-slate-500 focus:ring focus:ring-rose-200 focus:border-rose-500' : 
                        'border-white focus:border-gray-200 mb-4'
                    )}
                {...register} 
                placeholder={placeholder}
            />   
            {error && <span className='text-[11px] text-red-500 mb-2 mt-1 ml-1'>{errorMessage}</span>}
        </>
    );
};

export default TextArea;