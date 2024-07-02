export interface IUsersServiceCreate {
  email: string;
  nickname: string;
  password: string;
  name: string;
  age: number;
}
export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUsersServiceFindOneByNickname {
  nickname: string;
}
