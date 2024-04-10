import React from 'react';
import photo from '../img/photo.png';

export const Home = () => {
  return (
    <div className="home--wrapper">
      <div className="home--wrapper__welcome"></div>
      <div className="home--wrapper__planet-fon"></div>
      <div className="home--wrapper__summary">РЕЗЮМЕ</div>
      <main className="home--wrapper__home-main">
        <div className="home--wrapper__home-main__content">
          <div className="home--wrapper__home-main__content__beginning">
            <img
              src={photo}
              alt="Фото вашего будущего сотрудника"
              title="Фото вашего будущего сотрудника"
              className="home--wrapper__home-main__content__beginning__photo"
            />
            <h2>Лебаков Кирилл Вячеславович</h2>
            <br />

            <p>
              <strong>Дата рождения: </strong>6 апреля 1993
            </p>
            <p>
              <strong>Город: </strong>Калуга
            </p>
            <br />
            <p>
              <strong>Образование: </strong>Высшее(Бакалавр)
            </p>
            <p>
              <strong>Год окончания: </strong>2015
            </p>
            <p>Калужский государственный университет им.К.Э.Циолковского</p>
            <p>Инженерно - педагогический факультет, Менеджмент организации</p>
            <br />
          </div>
          <p>
            <strong>Опыт работы:</strong>
          </p>
          <ul>
            <li className="home--wrapper__home-main__content__work">
              <p>Билайн(ПАО Вымпелком)</p>
            </li>
            <br />
            <span className="home--wrapper__home-main__content__work__title">
              Специалист оперативного обслуживания клиентов
            </span>
            <br />
            <p>
              Консультации клиентов по вопросам домашнего интернета, телевидения
              по технологии FTTB и мобильной связи. Финансовые и диагностические
              вопросы проблем с подключением, продажи услуг компании новым и
              действующим клиентам.
            </p>
            <br />

            <span className="home--wrapper__home-main__content__work__title">
              Старший специалист по управлению качеством сервиса
            </span>
            <br />
            <p>
              Прослушивание контактов на предмет корректности консультаций,
              предоставление обратной связи, аналитика по прослушанным звонкам.
              Поиск и устранение неточностей/недоработок процессов и процедур
              компании, предложения по улучшению/исправлению и сопровождение
              реализации.Организация встреч и процессов по анализу проблемных
              тематик у сотрудников.
            </p>
            <br />
            <li className="home--wrapper__home-main__content__work">
              Астрал-Софт(АО Калуга Астрал)
            </li>
            <br />
            <span className="home--wrapper__home-main__content__work__title">
              Старший технический специалист
            </span>
            <p>
              Консультации клиентов по техническим вопросам программного
              обеспечения бухгалтерской отчётности.
            </p>
          </ul>
          <br />
          <p>
            <strong>Навыки:</strong>
          </p>
          <p>HTML, JavaScript, CSS(SCSS/SASS), React, Git, TipeScript </p>
        </div>
      </main>
    </div>
  );
};
