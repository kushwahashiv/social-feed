import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DashboardComponent} from './dashboard.component';
import {MaterialModule} from '../../app.module';
import {FormsModule} from '@angular/forms';
import {FeedsModule} from '../../feeds/feeds.module';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {UserModule} from '../../user/user.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {

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
        FeedsModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        UserModule,
        BrowserAnimationsModule
      ],
      declarations: [DashboardComponent],
    });

    TestBed.compileComponents();
  }));

  describe('with single row', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let testComponent: DashboardComponent;
    let toolbarElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      testComponent = fixture.debugElement.componentInstance;
      toolbarElement = fixture.debugElement.query(By.css('.mat-toolbar')).nativeElement;
    });

    it('should apply class based on color attribute', () => {
      expect(toolbarElement.classList.contains('header')).toBe(true);
    });

    it('should ensure search box class exists', () => {
      fixture.detectChanges();
      const searchBar = fixture.debugElement.query(By.css('.search-box')).nativeElement;
      expect(searchBar).toBeTruthy();
    });

    it('should not wrap the first row contents inside of a generated element', () => {
      expect(toolbarElement.firstElementChild!.tagName).toBe('A',
        'Expected the <a> element of the first row to be a direct child of the toolbar');
    });

    it('should project each toolbar-row element inside of the toolbar', () => {
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('.mat-toolbar-single-row')).length)
        .toBe(1, 'Expected one toolbar row to be present while no content is projected.');
    });
  });
});
