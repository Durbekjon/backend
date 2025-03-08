import { Injectable } from '@nestjs/common';
import { CreateEventInfoDto } from './dto/create-event-info.dto';
import { UpdateEventInfoDto } from './dto/update-event-info.dto';
import { EventInfoRepository } from './event-info.repository';

@Injectable()
export class EventInfoService {
  constructor(private readonly eventInfoRepository: EventInfoRepository) {}

  create(body: CreateEventInfoDto) {
    return this.eventInfoRepository.create(body);
  }

  findOne() {
    return this.eventInfoRepository.findOne();
  }

  update(body: UpdateEventInfoDto) {
    return this.eventInfoRepository.update(body);
  }

  changeVisibility() {
    return this.eventInfoRepository.changeVisibility();
  }
}
