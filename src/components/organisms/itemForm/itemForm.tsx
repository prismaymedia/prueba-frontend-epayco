import { useStubmit } from "../../../hooks/useSubmit";
import Button from "../../atoms/button/button";
import Input from "../../atoms/Input/Input";
import TextArea from "../../atoms/textArea/textArea";

const ItemForm = ()=>{
    
    const { onSubmit ,handleSubmit,titleRegister,bodyRegister,bodyError,titleError } = useStubmit();
    const disableButton = typeof titleError === 'string'  || typeof  bodyError  === 'string' ? true : false;
    return(
        <section id="formCol" className="flex flex-1/2 items-start">
            <form  noValidate className="flex flex-col items-stretch w-full rounded mb-2 p-6 border-[#cecece] border-1 gap-2  justify-between" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-4xl  font-bold mb-2 border-b-1 border-b-[#cecece]">Add New Item</h2>
                <div className="flex flex-col gap-2 items-center justify-between w-full max-w-[900px]">
                    <Input register={titleRegister}  classList="w-full grid-rows-1 border-2 border-gray-300 bg-white h-10  px-5 pr-3 rounded-0 text-sm focus:outline-none" placeholder="Title" error={titleError} />
                    <TextArea register={bodyRegister} classList="w-full border-2 border-gray-300 bg-white h-[100px] px-5 pr-3  rounded-0 text-sm focus:outline-none" placeholder="Body" error={bodyError} />
                    <Button disabled={disableButton} />    
                </div> 
            </form>
        </section>
    )
}
export default ItemForm;