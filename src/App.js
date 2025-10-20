import React from 'react';
import './App.css';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <div className="App">
      {/* Header с JS логикой */}
      <div className="header">
        <div className="container">
          <img src="/images/GPT-4.svg" alt="GPT-4 Logo" className="header-logo"/>
          <MobileMenu />
        </div>
      </div>

      <div className="main">
        <section className="welcome">
          <div className="container">
            <div className="welcome1">
              <div className="welcome-wrapper">
                <h1 className="welcome-left">Построим Что-нибудь <br/>Невероятное с<br/> GPT-4 OpenAI</h1>
                <p className="welcome-desk">Однако кровать для помощи в путешествии неприятна. Не 
                мысли все осуществляют благословение. Снисхождение
                ко всему, радость, изменение бурной привязанности. 
                Вечеринку мы лет на заказ разрешили.</p>
                <div className="btn-welcome">
                  <input type="text" className="Email-welcome" placeholder="Введите Email" />
                  <button className="welcome_start">Начать</button>
                </div>
                <div className="people-welcome">
                  <img className="people" src="/images/Group 81.svg" alt="People"/>
                  <a href="#" className="text-people">1,600 человек запросило доступ за последние 24 часа</a>
                </div>
              </div>    
              <div className="welcome-image">
                <img src="/images/Header Illustration.svg" alt="Welcome Illustration"/>
              </div>
            </div>
            <div className="welcome-web">
              <img src="/images/google.svg" alt="Google"/>
              <img src="/images/slack.svg" alt="Slack"/>
              <img src="/images/atlassian.svg" alt="Atlassian"/>
              <img src="/images/dropbox.svg" alt="Dropbox"/>
              <img src="/images/shopify.svg" alt="Shopify"/>
            </div>
          </div>
        </section>
        <section className="GPT">
          <div className="container">
            <div className="text-overlow">
              <div className="gpt-header">
                <h3 className="gpt-title">Что такое GPT-4</h3>
                <p className="gpt-text-desk">Мы так мнение друзей мне сообщаем как восторг. 
                  Вся передняя часть тарелки слышна ох как надо. 
                  Его неполноценное и неубедительное место жительства принадлежит ему. 
                  Соединение сделало невозможным собственное шумное жилье. 
                  На свадьбе светлость Ан настоял на такой человечности. 
                  Дружелюбный холостяцкий вход.</p>
              </div>
              <div className="gpt-grid">
                <div className="text-gpt">
                  <h1 className="gpt-osnovn">Возможности Превосходят<br/> Ваше Воображение</h1>
                  <h4 className="gpt-podtext">Исследовать библиотеку</h4>
                </div>
                
                <div className="text-gpt-menu">
                  <h3 className="gpt-menu">Чатботы</h3>
                  <p className="text-desk-men">Мы так мнение друзей мне сообщаем как восторг. Вся передняя часть тарелки<br/> слышна ох как надо.</p>
                </div>
                
                <div className="text-gpt-menu">
                  <h3 className="gpt-menu">База Знаний</h3>
                  <p className="text-desk-men">На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.</p>
                </div>
                
                <div className="text-gpt-menu">
                  <h3 className="gpt-menu">Образование</h3>
                  <p className="text-desk-men">На свадьбе светлость Ан настоял на такой человечности. Дружелюбный холостяцкий вход. Как поставить невозможное.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="future-is-now">
          <div className="container">
            <div className="future-grid">
              <div className="future-left">
                <h2 className="future-title">Будущее Уже Наступило<br/>и Тебе Нужно Лишь<br/>Осознать. Шагни в<br/>Будущее и Воплоти Его.</h2>
                <p className="future-desc">Запросить ранний доступ</p>
              </div>
              
              <div className="future-right">
                <div className="future-item">
                  <div className="future-text-wrapper">
                    <h3 className="right-text">Мгновенное<br/>улучшение ситуации<br/>с недоверием</h3>
                  </div>
                  <div className="future-desc-wrapper">
                    <p className="right-text-2">From they fire join he give of rich he. They age and draw mes like, improving and distrusts may instantly was household applauded.</p>
                  </div>
                </div>
                
                <div className="future-item">
                  <div className="future-text-wrapper">
                    <h3 className="right-text">Станьте активным<br/>человеком</h3>
                  </div>
                  <div className="future-desc-wrapper">
                    <p className="right-text-2">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                  </div>
                </div>
                
                <div className="future-item">
                  <div className="future-text-wrapper">
                    <h3 className="right-text">Сообщение или я<br/>ничего</h3>
                  </div>
                  <div className="future-desc-wrapper">
                    <p className="right-text-2">Led ask possible mistress relation elegance eat likewise debating. By message or an nothing amongst chiefly address.</p>
                  </div>
                </div>
                
                <div className="future-item">
                  <div className="future-text-wrapper">
                    <h3 className="right-text">Действительно<br/>мальчик, округ<br/>закона</h3>
                  </div>
                  <div className="future-desc-wrapper">
                    <p className="right-text-2">Really boy law courtry she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-apps">
          <div className="container">
            <div className="my-apps-image">
              <img src="/images/Feature.svg" alt="Feature"/>
            </div>
            <div className="my-apps-wrapper">
              <h1 className="my-apps-text-1">Запросить ранний доступ</h1>
              <p className="my-apps-title">Превосходя все<br/>ожидания</p>
              <h2 className="my-apps-text-1">Однако кровать для помощи в путешествии неприятна. Не<br/>мысли все осуществляют благословение. Снисхождение ко<br/>всему, радость, изменение бурной привязанности.<br/>Вечеринку мы лет на заказ разрешили.</h2>
              <p className="my-apps-desc">Запросить ранний доступ</p>
            </div>
          </div>
        </section>
        <section className="CTA">
          <div className="container">
            <div className="cta-background">
              <h1 className="cta-text-1">Запросите ранний доступ</h1>
              <p className="cta-text-2">Зарегистрируйтесь и начните исследовать<br/>безграничные возможности.</p>
              <div className="btn-cta">
                <button className="cta-start">Начать</button>
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="container">
            <div className="blog-header">
              <h2>Многое Происходит,<br/>Мы Ведем об Этом Блог.</h2>
            </div>
            <div className="blog-grid">
              <div className="blog-card main-card">
                <img src="/images/RectangleB.svg" alt="Блог пост 1" className="main-card-img"/>
                <div className="main-card-content">
                  <div className="main-card-text-container"> 
                    <div className="main-card-blog-date">Сентябрь 26, 2021</div>
                    <div className="main-card-blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                    <a href="#!" className="blog-read-more">Читать полную статью</a>
                  </div>
                </div>
              </div>

              <div className="blog-card">
                <img src="/images/Rectangle1.svg" alt="Блог пост 2"/>
                <div className="blog-content">
                  <div className="blog-text-container"> 
                    <div className="blog-date">Сентябрь 26, 2021</div>
                    <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                    <a href="#!" className="blog-read-more">Читать полную статью</a>
                  </div>
                </div>
              </div>

              <div className="blog-card">
                <img src="/images/Rectangle2.svg" alt="Блог пост 3"/>
                <div className="blog-content">
                  <div className="blog-text-container"> 
                    <div className="blog-date">Сентябрь 26, 2021</div>
                    <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                    <a href="#!" className="blog-read-more">Читать полную статью</a>
                  </div>
                </div>
              </div>

              <div className="blog-card">
                <img src="/images/Rectangle3.svg" alt="Блог пост 4"/>
                <div className="blog-content">
                  <div className="blog-text-container"> 
                    <div className="blog-date">Сентябрь 26, 2021</div>
                    <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемы, как это?</div>
                    <a href="#!" className="blog-read-more">Читать полную статью</a>
                  </div>
                </div>
              </div>

              <div className="blog-card">
                <img src="/images/Rectangle4.svg" alt="Блог пост 5"/>
                <div className="blog-content">
                  <div className="blog-text-container"> 
                    <div className="blog-date">Сентябрь 26, 2021</div>
                    <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                    <a href="#!" className="blog-read-more">Читать полную статью</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-future">
          <div className="container">
            <div className="section-future-content">
              <h2 className="section-future-title">Хотите Шагнуть в Будущее Раньше Других?</h2>
              <a href="#!" className="section-future-button">Запросить ранний доступ</a>
              <div className="information-future">
                <div className="footer-column">
                  <img src="/images/GPT-3.svg" alt="GPT-4 Logo" className="future-img"/>
                  <p className="light-text">ул. Профессора Поздеева, 13, к.Г,<br/>
                    Пермь, Пермский край, 614013 <br/><br/>
                    Все права защищены</p>
                </div>

                <div className="straight-columns">
                  <div className="footer-column-link">
                    <h3>Ссылки</h3>
                    <a>Оверсен</a>
                    <a>Соц. сети</a>
                    <a>Счетчики</a>
                    <a>Контакты</a>
                  </div>
                  
                  <div className="footer-column-link">
                    <h3>Компания</h3>
                    <a>Условия использования</a>
                    <a>Перс. данные</a>
                    <a>Контакты</a>
                  </div>
                  
                  <div className="footer-column-link">
                    <h3>Контакты</h3>
                    <a>ул. Профессора <br/> Поздеева, 13, к.Г, Пермь</a>
                    <a>+7 (342) 2-198-520</a>
                    <a>info@pstu.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </section>
      </div>

      <footer>
        <p className="footer-text">© 2023 GPT-3. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;