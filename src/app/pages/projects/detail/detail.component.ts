import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public project: ProjectModel;
  public showToolbar: boolean = false;
  public showToolbarTitle: boolean = false;

  public slideOpts: any = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private readonly route: ActivatedRoute,
              private readonly sanitizer: DomSanitizer) { }

  public ngOnInit(): void {

    this.getParams();
  }

  public onScroll($event: any): void {

    if ($event && $event.detail && $event.detail.scrollTop) {

      const scrollTop: number = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 110;
      this.showToolbarTitle = scrollTop >= 140;
    }
  }

  public getVideo(url: string) {

    if (url === undefined) {
        return '';
    }

    const results = url.match('[\\?&]v=([^&#]*)');
    const video = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

  private getParams(): void {

    this.route.queryParams.subscribe((data: {projectDetail: string, gallery: string}) => {

      this.project = JSON.parse(data.projectDetail);
    });
  }
}
