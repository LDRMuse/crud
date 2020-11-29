import dotenv from "dotenv";
dotenv.config();

const baseUrl = `http://localhost:5000`;
//TODO: Figure out why .env doesnt work
// const baseUrl = process.env.REACT_APP_BASE_URL;

// Factory Function
const api = (endpoint) => ({
  async create(payload) {
    const res = await fetch(`${baseUrl}/admins${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(res);
  },

  async login(payload) {
    const res = await fetch(`${baseUrl}/admins${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(res);
  },

});


export default api
