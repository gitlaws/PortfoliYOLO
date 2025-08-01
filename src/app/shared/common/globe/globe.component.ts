import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
} from '@angular/core';
import Globe from 'globe.gl';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss'],
})
export class GlobeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('globeContainer', { static: true }) globeContainer!: ElementRef;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() prefersReducedMotion: boolean = false;
  @Input() autoRotate: boolean = true;
  @Input() enableInteraction: boolean = false;

  private globe: any;
  private resizeObserver?: ResizeObserver;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeGlobe();
    this.setupResizeObserver();
  }

  ngOnDestroy(): void {
    if (this.globe) {
      this.globe._destructor();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private initializeGlobe(): void {
    this.globe = Globe()(this.globeContainer.nativeElement)
      .width(this.globeContainer.nativeElement.offsetWidth)
      .height(this.globeContainer.nativeElement.offsetHeight)
      .enablePointerInteraction(this.enableInteraction)
      .showAtmosphere(true)
      .atmosphereAltitude(0.15);

    // Configure controls
    this.globe.controls().enableZoom = this.enableInteraction;
    this.globe.controls().enablePan = this.enableInteraction;
    this.globe.controls().enableRotate = this.enableInteraction;

    // Set auto-rotation
    if (this.autoRotate && !this.prefersReducedMotion) {
      this.globe.controls().autoRotate = true;
      this.globe.controls().autoRotateSpeed = 0.3;
    }

    // Apply theme
    this.updateGlobeTheme();
  }

  private updateGlobeTheme(): void {
    if (this.theme === 'dark') {
      this.globe
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .atmosphereColor('rgba(100, 150, 255, 0.3)');
    } else {
      this.globe
        .globeImageUrl(
          '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        )
        .backgroundImageUrl('')
        .atmosphereColor('rgba(173, 216, 230, 0.2)');
    }
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      if (this.globe) {
        this.globe
          .width(this.globeContainer.nativeElement.offsetWidth)
          .height(this.globeContainer.nativeElement.offsetHeight);
      }
    });

    this.resizeObserver.observe(this.globeContainer.nativeElement);
  }
}
