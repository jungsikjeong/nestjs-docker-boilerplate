import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guards';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => String)
  fetchUser(
    @Context() context: IContext, //
  ): string {
    console.log(context.req.user);

    return '인가에 성공했습니다.';
  }

  @Mutation(() => User)
  createUser(
    @Args('email') email: string, //
    @Args('nickname') nickname: string, //
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number,
  ): Promise<User> {
    return this.usersService.create({
      email,
      nickname,
      password,
      name,
      age,
    });
  }
}
