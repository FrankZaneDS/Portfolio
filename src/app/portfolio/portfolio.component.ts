import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';

import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projectService = inject(ProjectsService);
  projects: Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  filtering: boolean = false;

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.typescript || this.angular || this.javascript) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }
  resetFilters() {
    this.javascript = false;
    this.angular = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
