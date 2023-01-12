import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './../schemas/user.schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController],
})
export class User {}
