class Student{
    constructor(name,UV){
        this.name=name;
        this.UV=UV;
    };
    studentUV(){
        console.log(`${this.name} is a student of ${this.UV}`)
    }
}
class subject extends Student{
    constructor(name,UV,subject){
        super(name,UV);
        this.subject=subject;
    };
    sus(){
        this.studentUV();
        console.log(`at ${this.subject}`)
    }
}
let sakib=new subject("sakib","GUB","CSE");
let jonak=new subject("Jonak","DIU","Textile");
sakib.studentUV();
sakib.sus();
console.log(sakib,jonak);