import { Component, inject, Renderer2 } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  renderer = inject(Renderer2);
  isWorkExperienceOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isEducationOpen: boolean = false;

  dowwnloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Darko_Stikovic_CV_English_IT.pdf');
    link.setAttribute('download', 'Darko_Stikovic_CV_English_IT.pdf');
    link.click();
    link.remove();
  }
}
