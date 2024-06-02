import { supabase } from "@/app/utils/supabaseClient";

export const getKesamCount = async () => {
  const { data, error, count } = await supabase.from("kesam_consumption")
    .select("*", {
      count: "exact",
    }).order("datetime", { ascending: false });
  if (error) {
    throw error;
  }
  return { ...data[data.length - 1], count };
};
