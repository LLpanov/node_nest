import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { CarModule } from './car/car.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PostModule, CatModule, CarModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
