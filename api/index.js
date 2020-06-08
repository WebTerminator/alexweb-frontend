import { getData } from "../utils";

export const isDevelopment = process.env.NODE_ENV !== "production";
const DEV_URL = process.env.API_URL;
const PROD_URL = process.env.API_URL_PROD;
export const BASE_API_URL = isDevelopment ? DEV_URL : PROD_URL;
export const FE_URL = isDevelopment
  ? `http://localhost:3000/`
  : `https://www.alex-web.co.uk/`;

const endpoints = {
  bio: `${BASE_API_URL}/bio`,
  article: `${BASE_API_URL}/articles?slug=`,
  articles: `${BASE_API_URL}/articles`,
  projects: `${BASE_API_URL}/projects`,
};

export const uploads = {
  cv: `https://res.cloudinary.com/ltbzulwym/image/upload/v1591036268/CV_b7118848c8.pdf`,
};

export const getBio = () => getData(endpoints.bio);
export const getBlogArticles = () => getData(endpoints.articles);
export const getArticleBySlug = (slug) =>
  getData(`${endpoints.article}${slug}`);
export const getProjects = () => getData(endpoints.projects);
