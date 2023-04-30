import { createContext, useContext, useEffect, useState } from "react";
import {
  apiService,
  getUserProfile,
  getUserRepos,
  repoData,
  userData,
} from "../../../services/api-service";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();
SearchContext.displayName = "Dados de Busca";

export const SearchProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userProfileName, setUserProfileName] = useState("");
  const [repoName, setRepoName] = useState("");

  return (
    <SearchContext.Provider
      value={{
        userName,
        setUserName,
        repoName,
        setRepoName,
        userProfileName,
        setUserProfileName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const { userName, repoName, userProfileName, setUserProfileName } =
    useContext(SearchContext);
  const [users, setUsers] = useState([]);
  const [userProfileData, setUserProfileData] = useState([]);
  const [userRepositories, setUserRepositories] = useState([]);

  const [repositories, setRepositories] = useState([]);
  const [resultCount, setResultCount] = useState(4);
  const [resultReposProfile, setResultReposProfile] = useState(4);

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

  useEffect(() => {
    async function fetchData() {
      const userProfileData = await getUserProfile(userProfileName);

      const userData = {
        name: userProfileData.name,
        subName: userProfileData.login,
        avatar: userProfileData.avatar_url,
        following: userProfileData.following,
        location: userProfileData.location,
        followers: userProfileData.followers,
      };

      setUserProfileData(userData);
    }
    if (userProfileName !== "") {
      fetchData();
    }
  }, [userProfileName, resultReposProfile]);

  useEffect(() => {
    async function fetchData() {
      const userRepoData = await getUserRepos(userProfileName);
      const userRepositoriesData = userRepoData
        .slice(0, resultReposProfile)
        .map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
        }));

      setUserRepositories(userRepositoriesData);
    }
    if (userProfileName !== "") {
      fetchData();
    }
  }, [userProfileName, resultReposProfile]);

  const searchUser = (user) => {
    setUserProfileName(user);
    navigate("/userProfile");
  };

  const showMoreResults = () => {
    setResultCount((prev) => prev + 4);
  };

  const showMoreResultsProfile = () => {
    setResultReposProfile((prev) => prev + 4);
  };

  return {
    users,
    userProfileData,
    userRepositories,
    repositories,
    showMoreResults,
    showMoreResultsProfile,
    searchUser,
  };
};
