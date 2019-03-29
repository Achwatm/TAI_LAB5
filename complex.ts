class Complex{
    private rzecz: number;
    private  urojona:number;

    constructor(rzecz: number, urojona: number){
        this.rzecz=rzecz;
        this.urojona=urojona;
    }
    add(obj: Complex):Complex{
        return new Complex(this.rzecz+obj.rzecz,this.urojona+obj.urojona)
    }
    substract(obj: Complex):Complex{
        return new Complex(this.rzecz-obj.rzecz,this.urojona-obj.urojona)
    }
    modul(){
        return Math.sqrt((this.rzecz * this.rzecz)+(this.urojona * this.urojona));
    }
    toString(): String{
        return this.rzecz + "+"+this.urojona + "i" ;
    }

}
let obj = new Complex(3,2);
let obj2 = new Complex(2,3);
obj = obj.add(obj2);
console.log(obj);
obj=obj.substract(obj2);
console.log(obj);
console.log(obj.modul());
console.log(obj.toString());
