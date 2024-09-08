import { Body, Controller, Get, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Post()
  addSubject(
    @Body() subject: InterfacePostSubject
  ): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject);
  }
}
