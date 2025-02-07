﻿import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import supabase from "@utils/supabase"
import { User } from "@supabase/supabase-js";
import { fetchUserId } from "@utils/auth";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const UserAuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<null | User>(null);
  const [adminId, setAdminId] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
        
    const {data} = await login("user@gmail.com", "realpass")
    const {fetchedData, fetchError} = await fetchUserId("admin@gmail.com")

    const { user: currentUser } = data;
    setUser(currentUser ?? null);
    setAdminId(fetchedData?.id)
    
    setLoading(false);
    };
    getUser();
    // onAuthStateChange code below
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        adminId,
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default UserAuthProvider;