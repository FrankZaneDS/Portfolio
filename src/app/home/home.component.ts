import { Component, inject, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PortfolioComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  projectsService = inject(ProjectsService);
  feturedProject: Project;
  ngOnInit(): void {
    this.feturedProject = this.projectsService.getProjectById(0);
  }
}
