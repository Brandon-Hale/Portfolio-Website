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
    name: 'Australian Institute of Management WA',
    position: 'Full Stack .NET Developer',
    url: 'https://aimwa.com/',
    startDate: '2024-07-29',
    summary: `Australian Institute of Management WA (AIM WA) aims to 
    inspire better workplaces through delivering high quality learning experiences, 
    by celebrating and recognising excellence and by influencing conversations that matter
    >85% of my time writing code.`,
    highlights: [
      'Architect and design complex applications using C#, .NET Core, and Azure, ensuring high performance and reliability.',
      'Implement and maintain secure RESTful APIs for seamless integration with third-party services and internal systems.',
      'Develop automated CI/CD pipelines using Azure DevOps to streamline the deployment process.',
      'Design and optimise SQL databases, including schema design, indexing, and query optimisation for enhanced performance.',
    ],
  },
  {
    name: 'Thales',
    position: 'Student Software Engineer',
    url: 'https://www.thalesgroup.com/en',
    startDate: '2024-02-25',
    endDate: '2024-11-24',
    summary: `Thales is a global technology leader investing in digital and “deep tech” innovations – Big Data, artificial intelligence, connectivity, cybersecurity and quantum technology – to build a future we can all trust.
    >30% of my time writing code.`,
    highlights: [
      'Developed an advanced drone tracking system using AI to predict drone locations based on visual sightings.',
      'Implemented machine learning algorithms to analyse drone movement patterns and enhance prediction accuracy.',
      'Participated in Agile sprints to design, develop, and deploy the software solution, adhering to SDLC principles.',
      'Developed and optimised software components in Java and Python, focusing on performance and maintainability.',
    ],
  },
  {
    name: 'Intellect Systems',
    position: 'Information Technology Undergraduate',
    url: 'https://www.intellectsystems.com.au',
    startDate: '2023-10-26',
    endDate: '2024-07-14',
    summary: `Smarter solutions for a better tomorrow. 
    Intellect Systems are experts in developing bespoke turn-key operational technology solutions from concept to reality.
    >60% of my time writing code`,
    highlights: [
      'Spearheading collaborative efforts among various departments to identify opportunities for software solutions that streamline processes and elevate operational efficiency.',
      'Researching, implementing, and managing innovative software solutions aimed at addressing specific organisational challenges and driving continuous improvement.',
      'Working closely under the guidance of the Managing Director, I assist in crucial decision-making processes and contribute to the strategic direction of our software initiatives.',
      'Automated email systems for default documents increasing time efficiency by 85%, and reducing human error.',
      'Implemented software seamlessly integrated into Microsoft systems for enhanced operational efficiency.',
    ],
  },
  {
    name: 'Aidacare',
    position: 'Warehouse Employee',
    url: 'https://www.aidacare.com.au',
    startDate: '2022-11-10',
    endDate: '2023-10-10',
    summary: `Aidacare is a leading provider of healthcare equipment and assistive technology for Hospitals, Residential Aged-Care Facilities, 
    Home & Community Care and Rehabilitation.`,
    highlights: [
      'Utilize inventory management software to track stock levels and optimize warehouse logistics.',
      'Coordinate with suppliers to ensure timely delivery of medical supplies, improving overall distribution efficiency',
    ],
  },
  {
    name: 'Work Health Professionals',
    position: 'Data Entry Lead',
    url: 'https://www.workhealthonsite.com.au',
    startDate: '2020-12-10',
    endDate: '2022-06-10',
    summary: `Work Health Professionals conduct audiometric testing, ear plug fit testing, health surveillance, spirometry, 
    skin screening, noise surveys, air monitoring, drug and alcohol screening, vision screening and other medical assessments.`,
    highlights: [
      'Accurately input and manage workers compensation data in WorkCover WA database, ensuring compliance and data integrity.',
      'Support office operations by handling data entry, document management, and administrative tasks.',
    ],
  },
];

export default work;
