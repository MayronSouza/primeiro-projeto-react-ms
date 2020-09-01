import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => (
  <>
    <img src={logoImage} alt="Git Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pequisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/41699484?s=400&u=d37cb7c6852e8f1c5cec578cc10d8a54f3253cc2&v=4"
          alt="Mayron Souza"
        />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/41699484?s=400&u=d37cb7c6852e8f1c5cec578cc10d8a54f3253cc2&v=4"
          alt="Mayron Souza"
        />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/41699484?s=400&u=d37cb7c6852e8f1c5cec578cc10d8a54f3253cc2&v=4"
          alt="Mayron Souza"
        />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="test">
        <img
          src="https://avatars0.githubusercontent.com/u/41699484?s=400&u=d37cb7c6852e8f1c5cec578cc10d8a54f3253cc2&v=4"
          alt="Mayron Souza"
        />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
