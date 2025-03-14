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
    const { setUsername, repositories } = useUser();
    
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
        <div className="mt-[138px]">
            <div className="flex justify-between items-center mb-2 mt-12">
                <h2 className="text-lg text-base-subtitle font-bold">User</h2>
                <span className="text-sm text-base-span">{repositories.length ? `${repositories.length} repositories` : ''}</span>
            </div>

            <div className="flex justify-center w-[54rem]">
                <form onSubmit={handleSubmit(handleSearchUser)} className="flex w-full justify-between h-14 gap-3">
                    <input 
                        type="text" 
                        placeholder="Search user" 
                        className="flex-1 px-4 py-3 bg-base-input border-[1px] border-base-border rounded-md placeholder:text-base-label focus:border-blue focus:outline-none"
                        {...register("username")}
                    />

                    <button type="submit" disabled={isSubmitting} className="flex justify-center items-center border-[1px] border-base-border rounded-md px-4 gap-2 duration-200 hover:bg-base-border ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm"/>
                        Search
                    </button>
                </form>
        </div>
        </div>
    );
}