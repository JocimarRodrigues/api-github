import { createContext, useContext, useEffect, useState } from "react";
import { userData } from "../../../services/api-service";

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
    const {userName, repoName} = useContext(SearchContext);
    const [users, setUsers] = useState([])
    const [resultCount, setResultCount] = useState(4);



    useEffect(() => {
        async function fetchData() {
            const data = await userData(userName);
            const usersData = data.items.slice(0, resultCount).map((item) => ({
                userName: item.login,
                avatar: item.avatar_url,
                id: item.id
            }));

            setUsers(usersData);
        }

        if (userName !== "") {
            fetchData();
        }
    }, [userName, resultCount])

    return {
        users
    }
}