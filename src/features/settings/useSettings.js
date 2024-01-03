import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { isPending, data: settings } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });

  return { settings, isPending };
}
