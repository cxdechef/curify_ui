import { Component } from '@angular/core';
import { CreateProvider } from 'src/app/models/create-provider';
import { CreateProviderService } from 'src/app/services/create-provider.service';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.scss'],
})
export class CreateProviderComponent {
  createProvider: CreateProvider = new CreateProvider();
  constructor(private createProviderService: CreateProviderService) {}
  onSubmit() {
    this.createProviderService.createProvider(this.createProvider).subscribe({
      next: (response) => {
        console.log('Provider created successfully:', response);
      },
    });
  }
}
