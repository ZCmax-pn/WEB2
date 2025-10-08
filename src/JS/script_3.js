function createBlogCard(post) {
  if (post.isMain) {
    return `
      <div class="blog-card main-card">
        <img src="${post.image}" alt="Блог пост ${post.id}" class="main-card-img">
        <div class="main-card-content">
          <div class="main-card-text-container"> 
            <div class="main-card-blog-date">${post.date}</div>
            <div class="main-card-blog-title">${post.title}</div>
            <a href="#!" class="blog-read-more">Читать полную статью</a>
          </div>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="blog-card">
        <img src="${post.image}" alt="Блог пост ${post.id}">
        <div class="blog-content">
          <div class="blog-text-container"> 
            <div class="blog-date">${post.date}</div>
            <div class="blog-title">${post.title}</div>
            <a href="#!" class="blog-read-more">Читать полную статью</a>
          </div>
        </div>
      </div>
    `;
  }
}
function createCompanyLogo(company) {
  return `<img src="${company.logo}" alt="${company.name}">`;
}
function createNavLink(link) {
  return `<li><a href="${link.href}">${link.text}</a></li>`;
}