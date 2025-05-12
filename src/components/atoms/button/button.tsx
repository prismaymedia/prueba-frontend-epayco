export default function Button ({disabled}:{disabled:boolean}) {

    return (<button role="form" disabled={disabled} className="bg-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 hover:bg-blue-700 text-white font-bold grid-rows-1 py-2 px-4 rounded w-full lg:max-w-[250px] lg:min-w-[250px]" type="submit">Add Item</button>)
}