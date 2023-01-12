import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user/user.module';
@Module({
  imports: [
    User,
    MongooseModule.forRoot(
      'mongodb+srv://onim:onimonim@cluster0.0q8xi.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//onim:onimonim@cluster0.0q8xi.mongodb.net/?retryWrites=true&w=majority
