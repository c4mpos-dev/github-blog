import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useUser } from "../hooks/useUser";

const searchFormSchema = z.object({
    username: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { setUsername } = useUser();
    
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { isSubmitting } 
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    function handleSearchUser(data: SearchFormInputs) {
        setUsername(data.username);
        reset();
    }

    return (
        <div className="flex justify-center w-[54rem] mt-[138px]">
            <form onSubmit={handleSubmit(handleSearchUser)} className="flex w-full justify-between h-14 mt-20 gap-3">
                <input 
                    type="text" 
                    placeholder="Buscar usuários" 
                    className="flex-1 px-4 py-3 bg-base-input border-[1px] border-base-border rounded-md placeholder:text-base-label focus:border-blue focus:outline-none"
                    {...register("username")}
                />

                <button type="submit" disabled={isSubmitting} className="flex justify-center items-center border-[1px] border-base-border rounded-md px-4 gap-2 duration-200 hover:bg-base-border ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm"/>
                    Buscar
                </button>
            </form>
        </div>
    );
}