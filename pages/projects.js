import React from "react";
import Layout from "../components/Layout";
import { Title } from "../components/Style";
import Project from "../components/Project";
import { getProjects } from "../api";
import { NextSeo } from "next-seo";
import { objectToArray } from "../utils";

const Projects = ({ projects }) => {
  const listOfProjects = objectToArray(projects);
  const sortedProjects = listOfProjects.sort((a, b) => a.sortable - b.sortable);
  return (
    <>
      <NextSeo
        title="AlexWeb LTD - projects"
        description="Some of the companies that I recently worked with"
      />
      <NextSeo
        openGraph={{
          title: "Projects",
          type: "webiste",
          description: "Recent projects that I worked on",
          images: [
            {
              url:
                "https://res.cloudinary.com/ltbzulwym/image/upload/v1591101650/facebook_2c545fac50.png",
              width: 1200,
              height: 1200,
              alt: "AlexWeb LTD logo",
            },
          ],
        }}
        twitter={{
          handle: "@AsWeb85",
          cardType: "summary",
          site: "@AsWeb85",
        }}
      />
      <Layout page="projects">
        <Title>Some of the projects I worked on in the last 2 years</Title>
        {sortedProjects.map((data, i) => (
          <Project key={`id-${i}`} source={data.description} />
        ))}
      </Layout>
    </>
  );
};

Projects.getInitialProps = async () => {
  const projects = await getProjects();
  return { projects };
};

export default Projects;
