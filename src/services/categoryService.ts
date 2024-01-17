import api from "./api";

const categoriesService = {
  getCategories: async () => {
    const res = await api.get("/categories");

    return res;
  },
};

export default categoriesService;
