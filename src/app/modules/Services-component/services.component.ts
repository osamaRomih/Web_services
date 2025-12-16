import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../core/model/service';
import { ServicesDataService } from '../core/services/services-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  // Tabs
  tabs = ['مشاريع ويب', 'أنظمة ومنصات'];
  activeTab = this.tabs[0];
  services: Service[] = [];
  constructor(private serviceData: ServicesDataService) {
    this.services = this.serviceData.services;
  }

  selectedService: Service | null = null;

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  get filteredServices() {
    return this.services.filter((s) => s.category === this.activeTab);
  }
}
