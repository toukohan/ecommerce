import { UserContext } from "../context/UserProvider";
import { useContext, ReactNode } from "react"; 

interface ProtectedProps {
    children: ReactNode;
}

const Protected = ({children}: ProtectedProps) => {
    const { userData } = useContext(UserContext);
    const role = userData?.user?.role;
    console.log("Protected role:", role);
    if(role !== "admin") {
        return <h1>Not authorized</h1>;
    }

    return (<>
    {children}
    </>)
}

export default Protected;