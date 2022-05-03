import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMetadataArgsStorage } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

export default TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    username: configService.get('database.username') || process.env.DB_USER,
    password: configService.get('database.password') || process.env.DB_PASS,
    database: configService.get('database.database') || process.env.DATABASE,
    entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    namingStrategy: new SnakeNamingStrategy(),
    keepConnectionAlive: true,
    synchronize: true,
    logging: ['error'],
    extra: {
      max: 100,
      connectionTimeoutMillis: 100000,
    },
  }),
});
