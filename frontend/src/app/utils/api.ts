import { supabase } from "@/app/utils/supabaseClient";

export const getKesamCount = async () => {
  const { data, error, count } = await supabase.from("kesam_consumption")
    .select("*", {
      count: "exact",
    }).order("datetime", { ascending: false }).single();
  if (error) {
    throw error;
  }
  return { ...data, count };
};
