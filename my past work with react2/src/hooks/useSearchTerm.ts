import { useSearchParams } from "react-router-dom";

export function useSearchTerm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("q") || "";

  return { searchTerm, setSearchTerm: setSearchParams };
}
