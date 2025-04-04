import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    type: "Automation Script",
    year: "2025",
    title: "User Management Script for Linux",
    results: [
      { title: "Reduced user management time by 70% through automation" },
      { title: "Reduced administrative overhead by 60%" },
      { title: "Standardized user provisioning across systems" },
      { title: "Minimized manual intervention in user operations by 85%" },
    ],
    link: "https://gitlab.com/devops-section/DevOps-learning/-/blob/main/scripts/projects/user_management.sh",
    image: darkSaasLandingPage,
  },
  {
    type: "Microservice Deployment",
    year: "2025",
    title: "End-to-End CI/CD Pipelines with Azure DevOps",
    results: [
      { title: "Automated deployment on code changes in Azure Repo" },
      { title: "Deployed 3 Microservices on AKS using ArgoCD" },
      { title: "Migrated from GitHub Actions to Azure DevOps" },
    ],
    link: "https://github.com/SuperSection/example-voting-app",
    image: lightSaasLandingPage,
  },
  {
    type: "Terraform Project",
    year: "2025",
    title: "AWS Infrastructure Management with Terraform",
    results: [
      { title: "Achieved 99.9% infrastructure consistency across environments" },
      { title: "Reduced infrastructure deployment time from days to minutes" },
      { title: "100% infrastructure audit compliance" },
    ],
    link: "https://gitlab.com/devops-section/DevOps-learning/-/tree/main/terraform",
    image: aiStartupLandingPage,
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container px-1 md:px-8">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I automate and implement solutions using DevSecOps best practices."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.type}</span>
                    <span>&nbsp;&bull;&nbsp;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Project Repo</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
