import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/Models/Recipe';
import { CentralService } from '../central.service';


interface reddit{
  data: {
    children: redditCard[]
  }
}

interface redditCard{
  data:{
    permalink:string,
    title:string,
    author:string,
    domain:string,
    thumbnail:string,
    author_fullname:string,
    subreddit_name_prefixed:string,
    link_flair_text:string,
    url :string,
    url_overridden_by_dest:string,
    media:{
      oembed:{
        author:string,
        thumbnail_url:string,
      }
    }
  }
}
@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent {

  constructor(public main: CentralService){
    main.getAllRecipes(main.accountId)
    this.$recipeSub = main.$recipes.subscribe(
      (recipes) => this.recipes = recipes
      )
   }


   public recipes : Recipe[] = []

   public $recipeSub: Subscription

   redditResponse:reddit | null=null;


  public async  searchReddit(event:Event) {
    const title = (event.target as HTMLInputElement).value;
    const url = `https://www.reddit.com/r/recipes/search.json?q=${title}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
       this.redditResponse=(data);
    } catch (error) {
      
    }
}

}
