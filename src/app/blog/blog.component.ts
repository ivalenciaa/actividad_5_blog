import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface News {
  title: string;
  image: string;
  body: string;
  date: Date;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  newsList: News[] = [
    {
      title: 'Primera Noticia',
      image: 'https://via.placeholder.com/300',
      body: 'Este es el cuerpo de la primera noticia.',
      date: new Date('2024-07-01')
    },
    {
      title: 'Segunda Noticia',
      image: 'https://via.placeholder.com/300',
      body: 'Este es el cuerpo de la segunda noticia.',
      date: new Date('2024-07-02')
    }
  ];

  newNews: News = {
    title: '',
    image: '',
    body: '',
    date: new Date()
  };

  addNews() {
    if (this.newNews.title && this.newNews.image && this.newNews.body) {
      this.newNews.date = new Date();
      this.newsList.push({ ...this.newNews });
      this.resetForm();
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  resetForm() {
    this.newNews = {
      title: '',
      image: '',
      body: '',
      date: new Date()
    };
  }
}

