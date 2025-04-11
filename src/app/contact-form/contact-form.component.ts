import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactMessage } from './contact-message';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {

  @Input()
  public sending = false;

  @Output()
  public readonly back = new EventEmitter<void>();

  @Output()
  public readonly sendMessage = new EventEmitter<ContactMessage>();

  public readonly email: FormControl;
  public readonly contactName: FormControl;
  public readonly message: FormControl;

  public formControls: FormGroup;

  constructor(fb: FormBuilder) {
    this.email = fb.control(null, [ Validators.required, Validators.email ]);
    this.contactName = fb.control(null, [ Validators.required ]);
    this.message = fb.control(null, [ Validators.required ]);

    this.formControls = fb.group({
      email: this.email,
      contactName: this.contactName,
      message: this.message,
    });
  }

  public send() {
    if (this.formControls.valid) {
      this.sendMessage.emit(this.formControls.value);
    }
  }
}
