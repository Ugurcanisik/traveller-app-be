import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { CommunityModule } from './community/community.module';
import { LikeModule } from './like/like.module';
import { SettingsModule } from './settings/settings.module';
import { TravelsModule } from './travels/travels.module';
import { UsersModule } from './users/users.module';
import DatabaseModule from './configrations/database/database.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configrations/configuration';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    AuthModule,
    CategoryModule,
    CommentModule,
    CommunityModule,
    LikeModule,
    SettingsModule,
    TravelsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
