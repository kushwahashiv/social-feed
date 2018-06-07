import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FeedBoxComponent} from './feed-box.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {MaterialModule} from '../../../app.module';
import {UserModule} from '../../../user/user.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {By} from '@angular/platform-browser';
import {DashboardComponent} from '../../../dashboard/components/dashboard.component';
import {DashboardModule} from '../../../dashboard/dashboard.module';
import {FeedsModule} from '../../feeds.module';
import {AddFriendComponent} from '../../../user/add-friend/add-friend.component';

describe('FeedBoxComponent', () => {
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
        MaterialModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        UserModule,
        DashboardModule,
        FeedsModule
      ],
      declarations: [],
    });

    TestBed.compileComponents();
  }));

  describe('Feed box', () => {
    let fixture: ComponentFixture<FeedBoxComponent>;
    let testComponent: AddFriendComponent;
    let cardElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(FeedBoxComponent);
      testComponent = fixture.debugElement.componentInstance;
      cardElement = fixture.debugElement.query(By.css('.mat-card')).nativeElement;
    });

    it('should apply a class feed-card on feed box card', () => {
      expect(cardElement.classList.contains('feed-card')).toBe(true);
    });

    it('should exists mat-card-content with a feed-card-content class applied on it', () => {
      fixture.detectChanges();
      const cardContent = fixture.debugElement.query(By.css('.feed-card-content')).nativeElement;
      expect(cardContent).toBeTruthy();
    });

    it('should not wrap the first row contents inside of a generated element', () => {
      expect(cardElement.firstElementChild!.tagName).toBe('MAT-CARD-CONTENT',
        'Expected the <mat-card-content> element of the first row to be a direct child of the toolbar');
    });
  });
});
