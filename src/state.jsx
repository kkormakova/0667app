const user = {
    name: "Иван",
    surname: "Петров",
    email: "ivan@ya.ru",
    id: "1",
    about: "Мой рассказ о своих увлечениях.",
    avatar: "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
};
const users = {
    0: {name: "Оксана", surname: "Соколова"},
    1: {name: "Юлия", surname: "Петрова"},
    2: {name: "Василий", surname: "Абрамов"},
    3: {name: "Петр", surname: "Лошкин"},
    4: {name: "Лидия", surname: "Иванова"},

}
export function getUser() {
    return user;
}
export function getUsers() {
    return users;
}