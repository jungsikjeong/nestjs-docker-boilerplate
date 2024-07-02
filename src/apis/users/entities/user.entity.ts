import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  @Length(2, 10)
  nickname: string;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @Field(() => Int)
  age: number;
}
