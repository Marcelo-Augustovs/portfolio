import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videoContainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videoContainer.component.html',
  styleUrls: ['./videoContainer.component.css']
})
export class VideoContainerComponent implements OnChanges {

  @Input({ required: true }) projectName!: string;
  @Input({ required: true }) techUsed!: string;
  @Input({ required: true }) projectDescription!: string;
  @Input({ required: true, alias: 'preview' }) previewLink!: string;
  @Input({ required: true, alias: 'github' }) githubLink!: string;

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  safePreviewUrl!: SafeResourceUrl;
  thumbnailUrl!: string;
  videoLoaded = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    const videoId = this.getVideoId(this.previewLink);

    this.thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    this.safePreviewUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);

    this.videoLoaded = false;
  }

  getVideoId(url: string): string {
    const regExp = /v=([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  loadVideo() {
    this.videoLoaded = true;
  }

  proximoProjeto() {
    this.next.emit();
  }

  projetoAnterior() {
    this.previous.emit();
  }
}