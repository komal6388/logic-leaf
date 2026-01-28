import { useState } from "react";
import React from "react";
const tabs = [
    {
        id: "tab1",
        label: "Backend",
        content: "Powerful backend technologies for scalable applications.",
        images: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", name: "PHP" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", name: ".NET Core" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", name: "Go" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", name: "Ruby" },
        ],
    },
    {
        id: "tab2",
        label: "Frontend",
        content: "Modern frontend tools for fast and interactive UI.",
        images: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", name: "Angular" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", name: "Next.js" },
        ],
    },
    {
        id: "tab3",
        label: "Databases",
        content: "Reliable databases for structured and unstructured data.",
        images: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", name: "SQLite" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", name: "Oracle" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", name: "SQL Server" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
        ],
    },
    {
        id: "tab4",
        label: "CMS",
        content: "Content management systems for easy publishing.",
        images: [
            { src: "https://cdn.simpleicons.org/wordpress/21759B", name: "WordPress" },
            { src: "https://cdn.simpleicons.org/drupal/0678BE", name: "Drupal" },
            { src: "https://cdn.simpleicons.org/joomla/5091CD", name: "Joomla" },
            { src: "https://cdn.simpleicons.org/strapi/4945FF", name: "Strapi" },
            { src: "https://cdn.simpleicons.org/contentful/2478CC", name: "Contentful" },
            { src: "https://cdn.simpleicons.org/sanity/F03E2F", name: "Sanity" },
        ],
    },
    {
        id: "tab5",
        label: "CloudTesting",
        content: "Cloud platforms and testing tools.",
        images: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", name: "Google Cloud" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", name: "Firebase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", name: "Selenium" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg", name: "Cypress" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", name: "Jest" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", name: "Postman" },
        ],
    },
    {
        id: "tab6",
        label: "DevOps",
        content: "Automation, CI/CD, and infrastructure management.",
        images: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", name: "Jenkins" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", name: "GitLab" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", name: "Terraform" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", name: "Nginx" },
        ],
    },
];




export default function Tabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center   border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-4 py-2 text-sm font-medium my-2 transition
              ${activeTab === tab.id
                                ? "text-[#B13A7E]"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {tab.label}

                        {/* Active underline */}
                        {activeTab === tab.id && (
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#B13A7E]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 rounded-lg border border-gray-200 bg-white md:p-10 p-5 shadow-sm">
                <div className="tabcontent-img-parent flex flex-wrap md:gap-16 gap-10 justify-center">
                    {
                        activeTabData.images.map((ele) => {

                            return <div className="text-center" >
                                <img src={ele.src} className="md:w-15 md:h-15 w-10 h-10 mb-2 mx-auto" alt="" />
                                <p className="text-[15px]" >{ele.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
