const API = "http://localhost:3001/api";

export const uploadSOP = async (file) => {
  const data = new FormData();
  data.append("file", file);

  const res = await fetch(`${API}/upload`, {
    method: "POST",
    body: data,
  });
  return res.json();
};

export const sendQuestion = async (question) => {
  const res = await fetch(`${API}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  return res.json();
};