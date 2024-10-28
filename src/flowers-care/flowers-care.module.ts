import { Module } from '@nestjs/common';
import { FlowersCareController } from './flowers-care.controller';

@Module({
  controllers: [FlowersCareController]
})
export class FlowersCareModule {}
