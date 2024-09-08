import { Component, inject } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  bsModalRef = inject(BsModalService);
  project: Project;
}
