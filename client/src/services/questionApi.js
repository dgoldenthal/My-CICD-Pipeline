const API_BASE_URL = "http://localhost:3001/api";

export const fetchQuestions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/questions/random`);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching questions:", error);
    return null;
  }
};

export const getQuestions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/questions/random`);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching questions:", error);
    return null;
  }
};
