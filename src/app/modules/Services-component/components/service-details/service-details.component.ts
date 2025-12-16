import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesDataService } from '../../../core/services/services-data.service';
import { CommonModule } from '@angular/common';
import { Service } from '../../../core/model/service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  service!: Service;

  constructor(
    private route: ActivatedRoute,
    private servicesSrv: ServicesDataService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.servicesSrv.getById(id);

    if (data) {
      this.service = data;
    }
  }
}
