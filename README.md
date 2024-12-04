Области хранения данных:

- База на json-server (server)
- BFF (server)
- Redux store (Client)

Сущности прлиожения:

- пользователь: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)

- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), store (использование роли в браузере и в зависимости от роли показывать что либо или нет)

- статья: БД (список статей), store (отображение в браузере)

- комментарии: БД (список комментариев), store (отображение в браузере)

Таблицы БД:

- Users: { id: 1, login: 'John', password: '123', role_id: 'admin', registered_at: '2024.11.14' }
- Roles: { id: 1, name: 'admin'}
- Posts: { id: 1, title: 'Post 1', img_url: 'url', content: 'text', published_at: '2024.11.14'}
- Comments: { id: 1, post_id: 1, author_id:}

Схема состояния на BFF:

- user_session: login, password, id, role_id

Схема states Redux store:

- user = { login, userName, roleId }
- posts: posts = [{id, title, imgUrl, publishedAt, commentsCount, content},]
- currentPost = { id, title, imgUrl, publishedAt, content, comments:[id, authorId, content, publishedAt] }
- users: user = [id, login, roleId, registeredAt]
