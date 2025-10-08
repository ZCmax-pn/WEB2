const blogPosts = [
  {
    id: 1,
    image: 'images/RectangleB.svg',
    date: 'Сентябрь 26, 2021',
    title: 'GPT-4 и Openai – это будущее. Давайте разберемся, как это?',
    isMain: true
  },
  {
    id: 2,
    image: 'images/Rectangle1.svg', 
    date: 'Сентябрь 26, 2021',
    title: 'GPT-4 и Openai – это будущее. Давайте разберемся, как это?',
    isMain: false
  },
  {
    id: 3,
    image: 'images/Rectangle2.svg',
    date: 'Сентябрь 26, 2021', 
    title: 'GPT-4 и Openai – это будущее. Давайте разберемся, как это?',
    isMain: false
  },
  {
    id: 4,
    image: 'images/Rectangle3.svg',
    date: 'Сентябрь 26, 2021',
    title: 'GPT-4 и Openai – это будущее. Давайте разберемся, как это?',
    isMain: false
  },
  {
    id: 5, 
    image: 'images/Rectangle4.svg',
    date: 'Сентябрь 26, 2021',
    title: 'GPT-4 и Openai – это будущее. Давайте разберемся, как это?',
    isMain: false
  }
];
const companies = [
  { name: 'Google', logo: 'images/google.svg' },
  { name: 'Slack', logo: 'images/slack.svg' },
  { name: 'Atlassian', logo: 'images/atlassian.svg' },
  { name: 'Dropbox', logo: 'images/dropbox.svg' },
  { name: 'Shopify', logo: 'images/shopify.svg' }
];
const navLinks = [
  { text: 'Главная', href: '#' },
  { text: 'Что такое GPT?', href: '#' },
  { text: 'Open AI', href: '#' },
  { text: 'Кейсы', href: '#' },
  { text: 'Библиотека', href: '#' }
];
function showBlogPosts() {
  console.log('Всего постов в блоге:', blogPosts.length);
}
export { blogPosts, companies, navLinks };