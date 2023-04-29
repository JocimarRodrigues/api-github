export const userData = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados dos usuários");
  }
};

export const repoData = async (reponame) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${reponame}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! stats: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Aconteceu um erro ao obter os dados dos repositórios");
  }
};

export const showUserProfile = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    throw new Error("Aconteceu um erro ao obter os dados do usuário")
  }
}

export const showUserRepos = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos?direction=desc`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
    throw new Error("Aconteceu um arro ao obters os dados do repositório do usuário")
  }
}



export const apiService = {
  userData,
  repoData,
  showUserProfile,
  showUserRepos
};
