import fetch from "isomorphic-unfetch";
import ReactGA from "react-ga";

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return { ...data };
};

export const objectToArray = (object) =>
  Object.keys(object).map((i) => object[i]);

export const formatDate = (d) => {
  const date = new Date(d);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const useAnalytics = () => {
  return {
    init: (trackingId) => {
      ReactGA.initialize(trackingId);
    },
    trackPageViewed: (path) => {
      if (path) {
        return ReactGA.pageview(path);
      }
      return ReactGA.pageview(
        window.location.pathname + window.location.search
      );
    },
    trackEvent: (params) => {
      ReactGA.event(params);
    },
  };
};
