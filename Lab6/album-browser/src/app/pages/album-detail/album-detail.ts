import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  loading = false;
  error = '';
  message = '';

  album: Album | null = null;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid album id.';
      return;
    }

    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle.trim() };

    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = updated; // локально обновляем UI
        this.message = 'Saved (simulated). UI updated locally.';
      },
      error: () => {
        this.error = 'Failed to update album.';
      },
    });
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}