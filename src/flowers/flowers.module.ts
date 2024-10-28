import { Module } from '@nestjs/common';
import { FlowersController } from './flowers.controller';

@Module({
  controllers: [FlowersController]
})
export class FlowersModule {}
