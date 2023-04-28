import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Form.module.scss";
import { SearchContext } from "../common/context/searchContext";
import { apiService } from "../../services/api-service";
import { useNavigate } from "react-router-dom";

const Form = ({ selectedButton }) => {
  const [searchValue, setSearchValue] = useState("");

  const { setUserName, setRepoName } = useContext(SearchContext);

  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    if (selectedButton === "user") {
        try {
            const response = await apiService.userData(searchValue)
            if (response.items.length > 0) {
                setUserName(searchValue);
                navigate("./usersPage")
            }
        } catch (error) {
            
        }
    }
  };

  return (
    <>
      <form className={styles.container} onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar..." onChange={onChange} />
        <button>
          <FaSearch size={20} />
        </button>
      </form>
    </>
  );
};

export default Form;
