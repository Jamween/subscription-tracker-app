import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.page.html',
  styleUrls: ['./add-subscription.page.scss'],
})
export class AddSubscriptionPage {
  subscription = {
    name: '',
    amount: null,
    date: '',
    billingCycle: 'monthly',
    paymentMethod: ''
  };

  constructor(private router: Router) {}

  saveSubscription() {
    console.log('Saving subscription:', this.subscription);
    
    this.router.navigate(['/home']);
  }
}
