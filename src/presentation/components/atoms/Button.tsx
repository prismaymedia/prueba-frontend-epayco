const Button = ({title}: {title: string}) => {
    return (
        <button className="border px-4 py-2 bg-slate-500 text-white rounded-md" type="submit">{title}</button>   
    );
};

export default Button;