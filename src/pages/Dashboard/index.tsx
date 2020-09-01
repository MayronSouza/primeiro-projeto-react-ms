import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepsitories] = useState<Repository[]>([]);

  async function handleAddrepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const reponse = await api.get<Repository>(`repos/${newRepo}`);

    const repository = reponse.data;

    setRepsitories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImage} alt="Git Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddrepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pequisar</button>
      </Form>

      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.full_name} href="test">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />

            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
