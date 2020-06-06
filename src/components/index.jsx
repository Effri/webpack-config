/** @format */

import CommentBox from "./Comments/CommentBox";

const data = {
  logo: {
    title: "Заголовок показательного компонента",
  },

  comments: [
    {
      img: "./assets/img/example.jfif",
      user: "Kyzinatra",
      id: 0,
      content:
        "Чтобы начать разработку удалите файлы ./src/components/Comments, sass/modules/example.sass И начните делать свой проект на React!",
    },
    {
      img: "./assets/img/example2.jfif",
      user: "Danil",
      id: 1,
      content:
        "Это мой комментарий и он создан с помощью React! Несет исключительно показательный характер",
    },
  ],
};

ReactDOM.render(
  <CommentBox title={data.logo.title} comments={data.comments}></CommentBox>,
  document.querySelector("#Expamle")
);
