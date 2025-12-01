/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Australian Institute of Management',
    position: 'Full Stack Software Engineer',
    url: 'https://aimwa.com/',
    startDate: '2024-07-01',
    summary: `Australian Institute of Management WA (AIM WA) aims to inspire better workplaces through delivering high quality learning experiences, by celebrating and recognising excellence and by influencing conversations that matter
    >85% of my time writing code.`,
    highlights: [
      'Leveraged Azure AI Search and Azure Open AI to implement Retrieval-Augmented Generation (RAG) for intelligent document processing, enabling personalised customer feedback and actionable advice',
      'Architected and delivered 5+ mission-critical enterprise applications using C# .NET Core, TypeScript and React, achieving 99.9% uptime and 40% reduction in system latency',
      'Designed and implemented secure RESTful APIs serving 10,000+ daily requests with seamless third-party integrations',
      'Built automated CI/CD pipelines using Azure DevOps, reducing deployment time by 80% and preventing recurring production errors',
      'Optimised database performance through advanced SQL Server indexing and schema redesign, improving query speed by 45% and reducing report generation from minutes to seconds',
    ],
  },
  {
    name: 'Thales',
    position: 'Student Software Engineer',
    url: 'https://www.thalesgroup.com/en',
    startDate: '2024-02-01',
    endDate: '2024-11-01',
    summary: `Thales is a global technology leader investing in digital and “deep tech” innovations – Big Data, artificial intelligence, connectivity, cybersecurity and quantum technology – to build a future we can all trust.
    >30% of my time writing code.`,
    highlights: [
      'Developed an AI-driven drone tracking system with machine learning algorithms to predict real-time locations from visual data',
      'Delivered production-ready modules in Java and Python through full SDLC participation in Agile development environment',
      'Collaborated with senior engineers on complex algorithm design and system integration challenges',
    ],
  },
  {
    name: 'Intellect Systems',
    position: 'Software Engineer Undergraduate',
    url: 'https://www.intellectsystems.com.au',
    startDate: '2024-01-01',
    endDate: '2024-07-01',
    summary: `Smarter solutions for a better tomorrow. Intellect Systems are experts in developing bespoke turn-key operational technology solutions from concept to reality.
    >60% of my time writing code.`,
    highlights: [
      'Facilitated technical workshops across 5+ departments, implementing automation solutions that reduced manual workflows by 30%',
      'Developed business intelligence tools using Power BI and .NET, enhancing data-driven decision making capabilities',
      'Partnered with C-level executives to align development initiatives with strategic objectives and long-term technical roadmaps',
      'Delivered proof-of-concept solutions adopted company-wide, bridging technical design with business priorities',
    ],
  },
  {
    name: 'Intellect Systems',
    position: 'Software Engineer Intern',
    url: 'https://www.intellectsystems.com.au',
    startDate: '2023-11-01',
    endDate: '2024-01-01',
    summary: 'Internship position focused on automation and process improvement.',
    highlights: [
      'Automated critical business processes, developing email dispatch systems that reduced human error by 70% and saved 10+ hours weekly',
      'Built internal task tracking system from concept to deployment, achieving company-wide adoption',
    ],
  },
];

export default work;
