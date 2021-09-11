let siblings=["sakib","sami","eramoni","sayma"];
console.log(siblings);
let [sakib,sami,era,sayma]=siblings;
console.log(sakib);
// object distructuring
let person={
    name:"sakib",
    id:212902026,
    UV:'GUB'
}
let {name, id, UV}=person;
console.log(person);
console.log(id);

// ====
let company={
    name:'Google',
    position:1,
    work:{
        app:{
            web:'web Application',
            android:'Android app Development',
            iosApp:'IOS app',
            office:{
                slide:'Google Slide',
                docs:'Google docs',
                sheet:'Google sheet'
            }
        },
        storage:'Google Drive',
        searchEngin:'Google search'
    }
}
console.log(company);
const {app,searchEngin}=company.work;
const {web,android,iosApp,office}=app;
const {slide,docs,sheet}=office;
console.log(slide)
