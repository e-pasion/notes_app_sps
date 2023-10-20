import { createContext, useState, useContext } from "react";
import { createUserRequest, getUsersRequest } from "../api/user";

const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext);

    if(!context) throw new Error("useUsers must be used within an AuthProvider") 
    return context;
}

// eslint-disable-next-line react/prop-types
export function UserProvider({children}){
    const [users,setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUsers(res.data);
            console.log(res) 
        } catch (error) {
            console.log(error)
        }

        
    }

    const createUser= async(user)=>{
        await createUserRequest(user);
        getUsers();
    }

    return(
        <UserContext.Provider value={{
            users,
            createUser,
            getUsers            
            }}>
            {children}
        </UserContext.Provider>
    )

}