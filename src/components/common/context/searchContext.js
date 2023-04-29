import { createContext, useContext, useEffect, useState } from "react";
import {
  apiService,
  repoData,
  showUserProfile,
  userData,
} from "../../../services/api-service";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();
SearchContext.displayName = "Dados de Busca";

export const SearchProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [repoName, setRepoName] = useState("");
  const [userProfile, setUserProfile] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        userName,
        setUserName,
        repoName,
        setRepoName,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const { userName, repoName, userProfile, setUserProfile } =
    useContext(SearchContext);
  const [users, setUsers] = useState([]);

  const [repositories, setRepositories] = useState([]);
  const [resultCount, setResultCount] = useState(4);

  const navigate = useNavigate();

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
        id: item.id,
      }));

      setRepositories(reposData);
    }

    if (repoName !== "") {
      fetchData();
    }
  }, [repoName, resultCount]);

  const searchUser = async (user) => {
    const userProfileData = await showUserProfile(user);
    const userRepoData  = await apiService.showUserRepos(user)
    const userData = {
      name: userProfileData.name,
      avatar: userProfileData.avatar_url,
      following: userProfileData.following,
      location: userProfileData.location,
      followers: userProfileData.followers,
    };
    const userRepositories = {
     

    }
    
    setUserProfile(userData);

    console.log(userProfile);
    navigate("/userProfile");
  };

  const showMoreResults = () => {
    setResultCount((prev) => prev + 4);
  };

  return {
    users,
    userProfile,
    repositories,
    showMoreResults,
    searchUser,
  };
};
