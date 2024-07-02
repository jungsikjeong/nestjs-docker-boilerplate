import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
  IUsersServiceFindOneByNickname,
} from './interface/users-service.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }
  findOneByNickName({
    nickname,
  }: IUsersServiceFindOneByNickname): Promise<User> {
    return this.usersRepository.findOne({
      where: { nickname },
    });
  }

  async create({
    email,
    nickname,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const existingEmail = await this.findOneByEmail({ email });
    const existingNickname = await this.findOneByNickName({ nickname });

    if (existingEmail) {
      throw new ConflictException('이미 등록된 이메일 입니다.');
    }

    if (existingNickname) {
      throw new ConflictException('이미 등록된 닉네임 입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      nickname,
      age,
    });
  }
}
