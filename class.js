
class Animal{
  speak(x){
    console.log(x + " makes noise")
  }
}
class lion extends Animal{
  speak(x){
    super.speak(x);
    console.log(x+ " roars")
  }
}
let l=new lion();
l.speak('lion');