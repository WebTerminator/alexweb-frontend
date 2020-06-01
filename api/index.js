import { getData } from "../utils";

const development = process.env.NODE_ENV !== "production";
const DEV_URL = process.env.API_URL;
const PROD_URL = process.env.API_URL_PROD;
export const BASE_API_URL = development ? DEV_URL : PROD_URL;
export const FE_URL = development
  ? `http://localhost:3000/`
  : `https://alexweb-frontend.now.sh/`;

const endpoints = {
  bio: `${BASE_API_URL}/bio`,
  article: `${BASE_API_URL}/articles?slug=`,
  articles: `${BASE_API_URL}/articles`,
  projects: `${BASE_API_URL}/projects`,
};

export const uploads = {
  cv: `${BASE_API_URL}/uploads/CV_ada5dd0981.pdf`,
};

export const getBio = () => getData(endpoints.bio);
export const getBlogArticles = () => getData(endpoints.articles);
export const getArticleBySlug = (slug) =>
  getData(`${endpoints.article}${slug}`);
export const getProjects = () => getData(endpoints.projects);
