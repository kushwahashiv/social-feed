import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddFriendComponent} from './add-friend.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedsModule} from '../../feeds/feeds.module';
import {MaterialModule} from '../../app.module';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserApiService} from '../services/user-api.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MatDialogModule, MatDialogRef} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('AddFriendComponent', () => {
  beforeEach(async(() => {
    const config = {
      apiKey: 'AIzaSyCi9LMwCAjX02Mp2ttHlJ-Ys3rZDqQiA6k',
      authDomain: 'my-project-1526496472002.firebaseapp.com',
      databaseURL: 'https://my-project-1526496472002.firebaseio.com',
      projectId: 'my-project-1526496472002',
      storageBucket: 'my-project-1526496472002.appspot.com',
      messagingSenderId: '869849331288'
    };


    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        MaterialModule,
        FeedsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(config),
        MatDialogModule,
      ],
      declarations: [
        AddFriendComponent
      ],
      providers: [
        UserApiService,
        {provide: MatDialogRef, useValue: {}},
      ],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AddFriendComponent]
      }
    });

    TestBed.compileComponents();
  }));

  describe('Invite a friend', () => {
    let fixture: ComponentFixture<AddFriendComponent>;
    let testComponent: AddFriendComponent;
    let dlgElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AddFriendComponent);
      testComponent = fixture.debugElement.componentInstance;
      dlgElement = fixture.debugElement.query(By.css('.mat-dialog-content')).nativeElement;
    });


    it('should not wrap the first row contents inside of a generated element', () => {
      expect(dlgElement.firstElementChild!.tagName).toBe('FORM',
        'Expected the <form> element of the first row to be a direct child of the toolbar');
    });
  });
});
