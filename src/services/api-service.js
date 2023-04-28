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
    throw new Error("Erro ao obter dados do usuário");
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
  } catch (erro) {
    console.log(erro);
    throw new Error("Aconteceu um erro ao obter os dados dos repositórios");
  }
};

export const apiService = {
  userData,
  repoData,
};
