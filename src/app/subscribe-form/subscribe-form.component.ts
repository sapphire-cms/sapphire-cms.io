import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent {

  @Input()
  public sending = false;

  @Output()
  public readonly subscribe = new EventEmitter<string>();

  @Output()
  public readonly askQuestion = new EventEmitter<void>();

  public readonly email: FormControl;
  public formControls: FormGroup;

  constructor(fb: FormBuilder) {
    this.email = fb.control(null, [ Validators.required, Validators.email ]);

    this.formControls = fb.group({
      email: this.email,
    });
  }

  public doSubscribe() {
    if (this.formControls.valid) {
      this.subscribe.emit(this.formControls.value.email);
    }
  }
}
