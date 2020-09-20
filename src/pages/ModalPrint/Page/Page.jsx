import React from "react";
import styled from "./Page.module.css";

const {
  fotoText,
  bodyStl,
  imgStl,
  h1Stl,
  h4Stl,
  blockTools,
  infoText,
} = styled;

const Page = () => (
        <div className={bodyStl}>
          <h1 className={h1Stl}>Резюме - Бранецкий Владлен Владимирович</h1>

          <div className={fotoText}>
            <a href="https://t-1000-t-resume.netlify.com/">
              <img
                className={imgStl}
                src="https://i.ibb.co/N3H9bCx/foto.jpg"
                width="300"
                alt="Foto"
                border="0"
              />
            </a>

            <p className={infoText}>
              <span>Образование: Высшее</span> <br />
              {/*<span> Дата рождения: 1987.07.18 (33)</span> <br/>*/}
              <span> Гражданство: Украинец </span> <br />
              <span> Пол: Мужской</span> <br />
              <span> Телефон: 063 75 633 75</span> <br />
              <span> E-mail: goognya@gmail.com</span> <br />
              <span> Место проживания: г. Киев </span> <br />
            </p>
          </div>
          <h4 className={h4Stl}>Программист-разработчик</h4>
          <p>
            <span>
              Цель: Получение должности React.js или Node.js разработчика
            </span>
            <br />
            <span> Занятость: Полный день, предпочтительно удаленно</span>
            <br />
            <span> Готовность к работе удаленно: да</span>
            <br />
            <span> Готовность к командировкам: нет</span>
            <br />
          </p>

          <h4 className={h4Stl}>Опыт работы по желаемой должности: год.</h4>
          <ul>
            <li>Школа GoIT</li>
            <li>Front-End / DEVELOPER</li>
            <li>2019.2 - 2020.4</li>
          </ul>
          <p className={blockTools}>
            <b> Навыки:</b>
            <br />
            <span> - React, JavaScript</span>
            <br />
            <span> - API, JSON, MongoDB</span>
            <br />
            <span> - Redux, npm, Webpack, Git</span>
            <br />
            <span>
              - HTML5/CSS, адаптивная или респонсив верстка, позиционирование,
              формы, FlexBox, Module CSS, Animation CSS
            </span>
            <br />
            <span>
              - разработка интерфейса, подключение плагинов, кроссбраузерность,
              создание эффектов
            </span>
            <br />
            <span>
              - Photoshop (не углубленные), Верстка макетов с нуля, адаптивных,
              валидных
            </span>
            <br />
            <span> - Chrome, Firefox - devTools</span>
            <br />
            <span>
              - Английский язык: читаю тех.документацию, воспринимаю на слух, не
              разговорный (д/в обучаюсь индивидуально с преподавателем
              английского языка)
            </span>
            <br />
          </p>
          <br />
          <br />
          {/* <p className={blockTools}>
            <b> Список некоторых работ:</b>
            <br />
            <span> - CRAFT HOUSE</span>
            <br />
            <span> - Reader</span>
            <br />
            <span> - Budget planner</span>
            <br />
            <span> - Phonebook</span>
            <br />
            <span> - Finder images</span>
            <br />
            <span> - Finder movies</span>
            <br />
            <span> - Responsive-web</span>
            <br />
          </p>
          <br />
          <br /> */}
          <hr />

          <h4 className={h4Stl}>Дополнительная информация:</h4>
          <blockquote />
          <span>
            Диплом: "Одесский национальный политехнический университет" Кафедра
            "Компьютерных и интелектуальных систем и сетей".
          </span>
          <br />
          <br />
          <span>
            Качества: Слышу собеседника, умею задавать вопросы, аргументирую
            свою точку зрения, имею навыки деловой переписки, свободно общаюсь с
            людьми разных культур, вижу и понимаю эмоции, вредных привычек не
            имею, усидчив, постоянно обучаюсь, понимаю что и зачем нужно,
            ответственный, довожу дело до конца, свои задачи не делегирую на
            коллег.
          </span>
          <br />
          <br />
          <span>Спасибо за внимание с Ув. Бранецкий В.В.</span>
          <br />
          <blockquote />
        </div>
    );

export default Page;
