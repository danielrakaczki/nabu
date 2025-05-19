import { supabase } from "../supabase";

export function useLogout() {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  return {
    logout,
  };
}
