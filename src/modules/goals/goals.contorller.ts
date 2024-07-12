import { Get, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
// notice this is from express

@Controller('/goals')
export class GoalsController {
  @Get()
  findAll(@Req() req: Request): string {
    console.log(req);
    return 'This return all goals';
  }
}
