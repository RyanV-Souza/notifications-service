import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { randomUUID } from 'node:crypto';
@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create() {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova solicitação de amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
