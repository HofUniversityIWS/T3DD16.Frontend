import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';
import {Router, CanActivate} from 'angular2/router';
import {Title} from 'angular2/platform/browser';
import {MarkdownPipe} from '../../pipes/markdown';
import {MdInputContainer, MdInput, MdTextarea} from '../material/input/input';
import {SessionService} from '../../providers/sessionService';

@Component({
  selector: 'session-create',
  directives: [FORM_DIRECTIVES, MdInputContainer, MdInput, MdTextarea],
  providers: [SessionService, Title],
  pipes: [MarkdownPipe],
  templateUrl: 'app/components/session/session-create.html'
})
@CanActivate(() => {
  // TODO Check if user there is a user
  // https://github.com/angular/angular/issues/4112
  return true;
})
export class SessionCreateComponent {

  title: Control;
  description: Control;
  form: ControlGroup;

  constructor(private router: Router, private builder: FormBuilder, private sessionService: SessionService, protected _title: Title) {
    this._title.setTitle('Create ' + this._title.getTitle());
    this.title = new Control('', Validators.required);
    this.description = new Control('', Validators.required);
    this.form = builder.group({
      title: this.title,
      description: this.description
    });
  }

  close() {
    this._title.setTitle(this._title.getTitle().substring(7));
    this.router.navigateByUrl('/session');
  }

  onSubmit() {
    if (this.form.valid) {
      this.sessionService.create(this.form.value).subscribe(
        res => this.close(),
        error => console.log(error)
      );
    }
  }

}
