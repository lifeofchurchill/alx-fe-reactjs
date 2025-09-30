import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input
        if (!username.trim()) {
            setError('Please enter a username');
            return;
        }

        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username);

            setUserData(data);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>GitHub User Search</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        style={{
                            flex: 1,
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px'
                        }}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#0366d6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </form>

            {/* Error Display */}
            {error && (
                <div style={{
                    padding: '10px',
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    {error}
                </div>
            )}

            {/* User Data Display */}
            {userData && (
                <div style={{
                    border: '1px solid #e1e4e8',
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: 'white'
                }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <img 
                            src={userData.avatar_url} 
                            alt={userData.login}
                            style={{ 
                                width: '100px', 
                                height: '100px', 
                                borderRadius: '50%' 
                            }}
                        />
                        <div>
                            <h2 style={{ margin: '0 0 5px 0' }}>{userData.name || userData.login}</h2>
                            <p style={{ margin: '0', color: '#586069' }}>@{userData.login}</p>
                            {userData.bio && <p style={{ marginTop: '10px' }}>{userData.bio}</p>}
                        </div>
                    </div>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '20px', 
                        marginTop: '20px',
                        paddingTop: '20px',
                        borderTop: '1px solid #e1e4e8'
                    }}>
                        <div>
                            <strong>{userData.public_repos}</strong>
                            <p style={{ margin: '5px 0 0 0', color: '#586069' }}>Repositories</p>
                        </div>
                        <div>
                            <strong>{userData.followers}</strong>
                            <p style={{ margin: '5px 0 0 0', color: '#586069' }}>Followers</p>
                        </div>
                        <div>
                            <strong>{userData.following}</strong>
                            <p style={{ margin: '5px 0 0 0', color: '#586069' }}>Following</p>
                        </div>
                    </div>

                    {userData.html_url && (
                        <a 
                            href={userData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                marginTop: '20px',
                                padding: '8px 16px',
                                backgroundColor: '#0366d6',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px'
                            }}
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
