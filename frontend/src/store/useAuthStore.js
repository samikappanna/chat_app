import { create } from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set) =>({
    authUser: null,
    isCheckingAuth:true,
    isLoggingIn: false,
    isUpdatingProfile:false,
    isSigningUp: false,

    checkAuth: async() =>{
         try {
            const res= await axiosInstance.get("/auth/check");

            set({authUser:res.data})
         } catch (error) {
            set({authUser:null})
            console.log("Error in checkAuth:",error)
         }
         finally
         {
                set({isCheckingAuth:false})
         }
    }
}))