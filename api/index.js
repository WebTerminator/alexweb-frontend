import { getData } from "../utils";

const DEV_URL = `https://strapi-api-portfolio.herokuapp.com`;
const BASE_URL = DEV_URL;

const endpoints = {
  bio: `${BASE_URL}/bio`,
  article: `${BASE_URL}/articles?slug=`,
  articles: `${BASE_URL}/articles`,
  projects: `${BASE_URL}/projects`,
};

export const uploads = {
  cv: `${BASE_URL}/uploads/CV_487e065e20.pdf`,
};

export const getBio = () => getData(endpoints.bio);
export const getBlogArticles = () => getData(endpoints.articles);
export const getArticleBySlug = (slug) =>
  getData(`${endpoints.article}${slug}`);
export const getProjects = () => getData(endpoints.projects);
