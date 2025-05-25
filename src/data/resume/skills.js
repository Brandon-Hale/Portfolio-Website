const skills = [
  {
    title: 'Azure Devops',
    competency: 5,
    category: ['Backend', 'Tools'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: '.NET Core',
    competency: 5,
    category: ['Backend', 'Web Development', 'Languages'],
  },
  {
    title: 'C#',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'Mustache',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'SortableJS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'SQL/MySQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Microsoft SQL Server',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'REST API',
    competency: 5,
    category: ['Web Development', 'Backend', 'Javascript'],
  },
  {
    title: 'Entity Framework',
    competency: 5,
    category: ['Backend', 'Web Development'],
  },
  {
    title: 'Sentry',
    competency: 4,
    category: ['Backend', 'Javascript'],
  },
  {
    title: 'Office 365',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'OAuth 2.0',
    competency: 3,
    category: ['Backend', 'Web Development'],
  },
  {
    title: 'Google Recaptcha',
    competency: 3,
    category: ['Backend', 'Javascript', 'Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Azure',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Microsoft Entra',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Microsoft Active Directory',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
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
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
