import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Form.module.scss";
import { SearchContext } from "../common/context/searchContext";
import { apiService } from "../../services/api-service";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const Form = ({ selectedButton }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setUserName, setRepoName } = useContext(SearchContext);

  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (selectedButton === "user") {
      try {
        const response = await apiService.userData(searchValue);
        if (response.items.length > 0) {
          setUserName(searchValue);
          navigate("users");
        } else {
          openModal();
          alert("Não Existe");
        }
      } catch (error) {}
    } else if (selectedButton === "repository") {
      try {
        const response = await apiService.repoData(searchValue);
        if (response.items.length > 0) {
          setRepoName(searchValue);
          navigate("repositories");
        } else {
          closeModal();
          alert("Não existe");
        }
      } catch (error) {}
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
      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Form;
