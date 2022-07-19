import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  return404(param?: number): any {
    const e = new NotFoundException('Recurso não encontrado');
    if (param === 1) return 'Correct';
    throw e;
  }

  return500(): any {
    throw new InternalServerErrorException('Falha no servidor');
  }
}
