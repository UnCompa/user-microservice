import { Module } from '@nestjs/common';
import { UserModule } from './core/infrastructure/adaptarts/modules/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
