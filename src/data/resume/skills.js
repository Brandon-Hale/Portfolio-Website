const skills = [
  {
    title: 'C#',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: '.NET Core/Framework',
    competency: 5,
    category: ['Backend', 'Web Development', 'Frameworks'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'AI'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Azure AI Search',
    competency: 3,
    category: ['AI', 'Cloud'],
  },
  {
    title: 'Azure OpenAI',
    competency: 3,
    category: ['AI', 'Cloud'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'Azure DevOps',
    competency: 5,
    category: ['Backend', 'Tools', 'CI/CD'],
  },
  {
    title: 'SQL Server',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'Entity Framework Core',
    competency: 5,
    category: ['Backend', 'Databases', 'Frameworks'],
  },
  {
    title: 'OAuth 2.0',
    competency: 4,
    category: ['Backend', 'Security'],
  },
  {
    title: 'Power BI',
    competency: 4,
    category: ['Analytics', 'Tools'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Backend', 'Javascript'],
  },
  {
    title: 'RESTful API Design',
    competency: 5,
    category: ['Backend', 'Web Development'],
  },
  {
    title: 'CI/CD Pipelines',
    competency: 4,
    category: ['DevOps', 'CI/CD'],
  },
  {
    title: 'Database Optimization',
    competency: 4,
    category: ['Databases', 'Performance'],
  },
  {
    title: 'Agile/Scrum',
    competency: 4,
    category: ['Methodologies'],
  },
  {
    title: 'Test-Driven Development',
    competency: 3,
    category: ['Testing', 'Methodologies'],
  },
  {
    title: 'System Architecture',
    competency: 4,
    category: ['Architecture'],
  },
  {
    title: 'Machine Learning',
    competency: 2,
    category: ['AI'],
  },
  {
    title: 'Microsoft Graph API',
    competency: 4,
    category: ['Backend', 'Microsoft'],
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    competency: 3,
    category: ['AI'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#8e44ad',
  '#f39c12',
  '#2ecc71',
  '#e74c3c',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
