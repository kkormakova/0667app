const user = {
    name: "Иван",
    surname: "Петров",
    email: "ivan@ya.ru",
    id: "1",
    about: "Мой рассказ о своих увлечениях.",
    avatar: "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
};
const users = {
    0: {name: "Оксана", surname: "Соколова", id: 2},
    1: {name: "Юлия", surname: "Петрова", id: 4},
    2: {name: "Василий", surname: "Абрамов", id: 9},
    3: {name: "Петр", surname: "Лошкин", id: 12},
    4: {name: "Лидия", surname: "Иванова", id: 17},

}
export function getUser(userId) {
    for (let i = 0; i < Object.keys(users).length; i++) {
        if (users[i].id == userId) return users[i];
    }
    return user;
}
export function getUsers() {
    return users;
}