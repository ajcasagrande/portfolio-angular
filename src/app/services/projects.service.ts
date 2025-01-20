import { Injectable } from '@angular/core';
import { PROJECT_LIST, Project } from './project-data';

@Injectable()
export class ProjectsService {
  getProjects(): Project[] {
    return PROJECT_LIST;
  }
}
