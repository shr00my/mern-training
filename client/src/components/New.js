import React from "react";
import "../styles/new-bg.css";

const New = () => {
  return (
    <div className="wrapper">
      |
      <div className="list-wrapper">
        <ul className="h3">Обновление от 17.02:</ul>
        <li>Вернул номер телефона на сайт</li>
        <li>
          Добавил раздел «Обновления», здесь будут описаны все обновления,
          старые обновления будут скрываться, можно будет поиграться с
          видимостью элемента
        </li>
        <li>Добавлен виджет битрикса на сайт</li>
        <li>В виджет добавлен телеграм для теста</li>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default New;
