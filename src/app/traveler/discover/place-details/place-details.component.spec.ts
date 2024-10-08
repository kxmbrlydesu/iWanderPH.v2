import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceDetailsComponent } from './place-details.component';
import { RouterTestingModule } from '@angular/router/testing'; // Import for routing if needed
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import for HTTP testing if needed

describe('PlaceDetailsComponent', () => {
  let component: PlaceDetailsComponent;
  let fixture: ComponentFixture<PlaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceDetailsComponent], // Use declarations instead of imports
      imports: [RouterTestingModule, HttpClientTestingModule] // Import any necessary modules
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
