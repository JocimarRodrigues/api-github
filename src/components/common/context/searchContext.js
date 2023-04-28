import { createContext, useState } from "react";

export const SearchContext = createContext();
SearchContext.displayName = "Dados de Busca";

export const SearchProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [repoName, setRepoName] = useState("");

  return (
    <SearchContext.Provider
      value={{ userName, setUserName, repoName, setRepoName }}
    >
      {children}
    </SearchContext.Provider>
  );
};
