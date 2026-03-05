import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  loading = false;
  error = '';
  albums: Album[] = [];

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
      },
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== id);
      },
      error: () => {
        this.error = 'Failed to delete album.';
      },
    });
  }
}