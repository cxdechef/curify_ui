import { Component, OnInit } from '@angular/core';
import { ProviderList } from 'src/app/models/provider-list';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
})
export class ProviderListComponent implements OnInit {
  providers: ProviderList[] = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProviders().subscribe((res) => {
      this.providers = res;
    });
  }
}
