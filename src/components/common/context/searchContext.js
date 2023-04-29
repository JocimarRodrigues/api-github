import { createContext, useContext, useEffect, useState } from "react";
import { repoData, userData } from "../../../services/api-service";

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

export const useSearchContext = () => {
  const { userName, repoName } = useContext(SearchContext);
  const [users, setUsers] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [resultCount, setResultCount] = useState(4);

  useEffect(() => {
    async function fetchData() {
      const data = await userData(userName);
      const usersData = data.items.slice(0, resultCount).map((item) => ({
        userName: item.login,
        avatar: item.avatar_url,
        id: item.id,
      }));

      setUsers(usersData);
    }

    if (userName !== "") {
      fetchData();
    }
  }, [userName, resultCount]);

  useEffect(() => {
    async function fetchData() {
      const data = await repoData(repoName);
      const reposData = data.items.slice(0, resultCount).map((item) => ({
        nameRepo: item.full_name,
        description: item.description,
        stars: item.stargazers_count,
        id: item.id
      }));

      setRepositories(reposData);
    }

    if (repoName !== "") {
      fetchData();
    }
  }, [repoName, resultCount]);

  const showMoreResults = () => {
    setResultCount((prev) => prev + 4)
  }

  return {
    users,
    repositories,
    showMoreResults
 
  };
};
