import { clearSupabaseMMKVSupabaseStorage } from "../store/supabase-store";
import { supabase } from "../supabase";

export function useLogout() {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    clearSupabaseMMKVSupabaseStorage();
  };
  return {
    logout,
  };
}
