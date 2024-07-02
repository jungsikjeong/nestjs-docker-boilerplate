<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="200" alt="graphql Logo" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl4fp0SkQbTPU5ZxVl6AKWYuKCwM0gIhNtQ&s" width="200" alt="Docker Logo" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoQSigP-x01Rb5ybPXUmN1__6YBYea2lotQ&s" width="200" alt="MySQL Logo" />
</p>

# 소갯말

이 프로젝트는 nestjs, graphql, mysql, docker을 통해 만들어졌습니다.
기본적인 회원가입 기능과 로그인 기능이 있습니다.

# 다음을 따라주세요

- yarn install
- root 디렉토리에 `.env.docker` 생성
- 빈칸 입력

```js
DATABASE_TYPE=mysql
DATABASE_HOST=my-database
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_DATABASE=mydocker
JWT_SECRET_KEY=
JWT_REFRESH_KEY=
```

- docker-compose build
- docker-compose up
