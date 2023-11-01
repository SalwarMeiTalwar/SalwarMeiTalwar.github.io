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
      setRepos(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const changeVisibility = async (repo) => {
    try {
      await axios.patch(`https://api.github.com/repos/${repo.full_name}`, {
        private: !repo.private,
      }, {
        headers: { Authorization: `token ${token}` },
      });
      fetchRepos(); // Refetch the repositories after changing the visibility
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center mb-6">
        <label htmlFor="github-token" className="mr-2">GitHub Token:</label>
        <input id="github-token" type="text" value={token} onChange={e => setToken(e.target.value)} className="border p-2 rounded-md flex-grow" />
      </div>
      <button onClick={fetchRepos} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {loading ? 'Loading...' : 'Fetch Repos'}
      </button>
      <ul className="mt-6 space-y-4">
        {repos.map(repo => (
          <li key={repo.id} className="border p-4 rounded-md flex justify-between items-center">
            <span>{repo.name} ({repo.private ? 'Private' : 'Public'})</span>
            <button onClick={() => changeVisibility(repo)} className={`px-4 py-2 rounded-md ${repo.private ? 'bg-green-500' : 'bg-red-500'}`}>
              Make {repo.private ? 'Public' : 'Private'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
