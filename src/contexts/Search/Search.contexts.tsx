import {createContext} from "react";

type SearchContext = {
  value: string,
  update: (val: string) => void
}

export const SearchContexts = createContext<SearchContext>({} as SearchContext)