import { User } from 'src/apis/users/entities/user.entity';
import { IAuthUser, IContext } from 'src/commons/interfaces/context';

export interface IAuthServiceLogin {
  email: string;
  password: string;
  context: IContext;
}

export interface IAuthServiceGetAccessToken {
  user: User | IAuthUser['user'];
}

export interface IAuthSetRefreshToken {
  user: User;
  context: IContext;
}
export interface IAuthServiceRestoreAccessToken {
  user: IAuthUser['user'];
}
