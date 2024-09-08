import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Search Movies',
      summary:
        'An Angular web application that allows users to search for movies.',
      desc: 'The "Movie Search" project is a movie search web application that allows users to find movies by typing in keywords. It leverages APIs to fetch data and display results dynamically. The application is built with Angular and TypeScript, and its design focuses on simplicity and usability.',
      projectLink: 'https://github.com/FrankZaneDS/Movie-search',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      photos: ['movies1.png', 'movies2.png', 'movies3.png'],
    },
    // {
    //   id: 1,
    //   name: 'Mobile Voice App',
    //   summary: 'Test Description',
    //   desc: '',
    //   projectLink: 'https://github.com/monsky/voice',
    //   tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    //   photos: [],
    // },
    {
      id: 2,
      name: 'Stock Trading',
      summary:
        'Angular project designed for displaying and interacting with stock data.',
      desc: 'The Stock Trade Application is a frontend project built using Angular. The purpose of this app is to display stock-related data to users, potentially allowing them to interact with financial data such as stocks, charts, or trading options. It uses a typical Angular setup, and the project structure follows standard practices with Angular CLI for building and scaffolding components.',
      projectLink: 'https://github.com/FrankZaneDS/stockTrade',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      photos: ['stock1.png', 'stock2.png', 'stock3.png', 'stock4.png'],
    },
  ];
  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      alert('There is no project that matches the id: ' + id);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
