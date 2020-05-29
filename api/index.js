import { getData } from "../utils";

const development = process.env.NODE_ENV !== "production";
const DEV_URL = process.env.API_URL;
const PROD_URL = process.env.API_URL_PROD;
export const BASE_URL = development ? DEV_URL : PROD_URL;

const endpoints = {
  bio: `${BASE_URL}/bio`,
  article: `${BASE_URL}/articles?slug=`,
  articles: `${BASE_URL}/articles`,
  projects: `${BASE_URL}/projects`,
};

export const uploads = {
  cv: `https://strapi-api-portfolio.herokuapp.com/uploads/CV_c07b60209f.pdf`,
};

export const getBio = () => getData(endpoints.bio);
export const getBlogArticles = () => getData(endpoints.articles);
export const getArticleBySlug = (slug) =>
  getData(`${endpoints.article}${slug}`);
export const getProjects = () => getData(endpoints.projects);
