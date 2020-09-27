export class Food{
  
    public food:string;
    public des: string;
    public votes: number;

    constructor(food:string, des:string, vote?:number){
     this.food = food;
     this.des = des;
     this.votes = vote || 0;
    }

    public voteUp(){
        this.votes++;
    }

    public voteDown(){
        this.votes--;
    }
}