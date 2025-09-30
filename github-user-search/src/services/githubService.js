import axios from 'axios';

export async function fetchUserData({ username, location, minRepos }) {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>${minRepos}+`;

    query = query.trim().replace(/\+$/, "");

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // list of users
  } catch (error) {
    throw new Error("No users found");
  }
}
