import { useAppDispatch } from "@/lib/hooks";
import { auth } from "@/database/config";
import { logOut } from "@/lib/features/userSlice";
import { signOut } from "firebase/auth";

const LogOut = () => {
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(logOut())
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

  return (
    <p onClick={handleLogOut} className="text-sm text-red-500 font-semibold cursor-pointer"> Log Out </p>
  )
}

export default LogOut;