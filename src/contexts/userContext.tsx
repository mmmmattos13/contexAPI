import { createContext,useState } from 'react';

interface UserContextProps{
    nome: string;
    loginName: string;
    saveLoginUserToCache: (user:string) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export default function UserContextProvider({ children } : any){

    const [loginName, setLoginName] = useState<string>("");
    const contextValues = { nome : "Matheus", loginName: loginName, saveLoginUserToCache: saveLoginUserToCache } 

    function saveLoginUserToCache(user:string){
        if (user != ""){
            setLoginName(user);
        }
        
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
};


