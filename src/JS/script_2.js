function renderBlog() {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) {
    console.log('Блог грид не найден');
    return;
  }
  blogGrid.innerHTML = '';
  
  blogPosts.forEach(post => {
    const blogCardHTML = createBlogCard(post);
    blogGrid.insertAdjacentHTML('beforeend', blogCardHTML);
  });
}

function renderCompanies() {
  const welcomeWeb = document.querySelector('.welcome-web');
  if (!welcomeWeb) {
    console.log('Блок компаний не найден');
    return;
  }
  
  welcomeWeb.innerHTML = '';
  
  companies.forEach(company => {
    const companyHTML = createCompanyLogo(company);
    welcomeWeb.insertAdjacentHTML('beforeend', companyHTML);
  });
}

function renderNavigation() {
  const headerList = document.querySelector('.header-list');
  if (!headerList) {
    console.log('Меню не найдено');
    return;
  }
  
  headerList.innerHTML = '';
  
  navLinks.forEach(link => {
    const navHTML = createNavLink(link);
    headerList.insertAdjacentHTML('beforeend', navHTML);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  console.log('Страница загрузилась, рендерим всё');
  
  renderNavigation();
  renderCompanies();
  renderBlog();
  
  const navToggle = document.getElementById('navToggle');
  const navHeader = document.querySelector('.nav-header');
  function toggleMobileMenu() {
    if (window.innerWidth <= 768) {
      navToggle.classList.toggle('active');
      navHeader.classList.toggle('active');
      if (navHeader.classList.contains('active')) {
        navHeader.style.display = 'flex';
        navHeader.style.opacity = '0';
        navHeader.style.transform = 'translateY(-20px)';
        setTimeout(() => {
          navHeader.style.transition = 'all 0.3s ease-out';
          navHeader.style.opacity = '1';
          navHeader.style.transform = 'translateY(0)';
        }, 10);
      } else {
        navHeader.style.opacity = '0';
        navHeader.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
          navHeader.style.display = 'none';
        }, 300);
      }
    }
  }
  
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
  const navLinks = document.querySelectorAll('.nav-header a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768 && navHeader.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (navHeader) {
        navHeader.style.display = '';
        navHeader.style.opacity = '';
        navHeader.style.transform = '';
        navHeader.classList.remove('active');
      }
      if (navToggle) {
        navToggle.classList.remove('active');
      }
    } else {
      if (navHeader && !navHeader.classList.contains('active')) {
        navHeader.style.display = 'none';
      }
    }
  });
});