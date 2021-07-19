import { Component,  OnInit } from '@angular/core';
import { Display } from '../display';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 
 
  posts:Display[] = [
    new Display("Life is what happens when you're busy making other plans.","John Lennon","binamin",6,10),
    new Display("Spread love everywhere you go. Let no one ever come to you without leaving happier.","mother teresa","Samir",13,4 ),
    new Display("When you reach the end of your rope, tie a knot in it and hang on.","D. Roosevelt"," Maestro",45,7)

]

deletePost(isComplete:any,index:any){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.posts[index].quote}`)
      

      if(toDelete){
        this.posts.splice(index,1)
      }
    }
}



// upVote(index:number) {
//   this.posts[index].upvote++;
// }
// downVote(index:number) {
//   this.posts[index].downVote++;
// }
  constructor() { }

  ngOnInit(): void {
  }

}
