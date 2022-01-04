import React from 'react';
import Layout from '../components/layout';
// import UsePosts from '../hooks/use-posts';
import Splash from '../components/splash';
import EducationSection from '../components/education-section';
import ExperienceSection from '../components/experience-section';
import ToolsAndTechHighLevelSection from '../components/tools-and-tech-high-level-section';

export default function indexPage() {
  // const posts = UsePosts();

  return (
    <Layout>
      <Splash></Splash>
      <EducationSection></EducationSection>
      <ExperienceSection></ExperienceSection>
      <ToolsAndTechHighLevelSection></ToolsAndTechHighLevelSection>
      {/* <ToolsAndTechDeepDiveSection></ToolsAndTechDeepDiveSection> */}
    </Layout>
  );
}
