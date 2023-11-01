import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [token, setToken] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: { Authorization: `token ${token}` },
      });
      setRepos(response.data.filter(repo => !repo.private));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const makePrivate = async (repo) => {
    try {
      await axios.patch(`https://api.github.com/repos/${repo.full_name}`, {
        private: true,
      }, {
        headers: { Authorization: `token ${token}` },
      });
      setRepos(repos.filter(r => r.id !== repo.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label>
        GitHub Token:
        <input type="text" value={token} onChange={e => setToken(e.target.value)} />
      </label>
      <button onClick={fetchRepos} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Repos'}
      </button>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            {repo.name}
            <button onClick={() => makePrivate(repo)}>Make Private</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
