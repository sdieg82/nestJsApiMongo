import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://root:root@crudnestangular.ebf1djv.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
