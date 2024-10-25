import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front';

  private httpClient: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.post('http://localhost:3000/test', { test: '1' }).subscribe({ next: console.log });
  }
}
