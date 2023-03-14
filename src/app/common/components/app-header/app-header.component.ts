import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  queryParam: string = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
  }

  onSearch(): void {
    if (this.queryParam) {
      return this.setQueryParam(this.queryParam)
    }

    this.setQueryParam()
  }

  setQueryParam(search: string | null = null): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { search },
        queryParamsHandling: 'merge'
      }
    );
  }
}
