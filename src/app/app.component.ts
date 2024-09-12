import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AaravVimalkumarRathodLearningAngular';
  courseName:String = "MAD307"
  courseTitle : String ="JS Frameworks";


}
