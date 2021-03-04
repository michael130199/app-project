import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  public projects: Array<ProjectModel>;

  constructor(public readonly router: Router,
              private readonly projectService: ProjectService) { }

  public ngOnInit(): void {

    this.getProjects();
  }

  public goToDetail(project: ProjectModel): void {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        projectDetail: JSON.stringify(project),
      }
    };

    this.router.navigate(['projects/detail'], navigationExtras);
  }

  private async getProjects(): Promise<void> {

    this.projects = await this.projectService.getProjects();
  }
}
