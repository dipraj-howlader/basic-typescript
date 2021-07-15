var myName = "Dipraj";
var age;
age = 12;
var isHungry = false;
var gameDirection = "left";
console.log(gameDirection);
var studentId = 344304;
studentId = 'web4-344304';
studentId = 122323;
console.log(studentId);
var person = {
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping"
};
var person2 = {
    name: "Someone",
    age: 80
};
//  Array 
var numbers = [33, 40, 50, 80, 'stefjhj'];
var persons = [
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    },
    {
        name: "Solaiman Shadin",
        age: 12,
        hobby: "Sleeping"
    }
];
// functions
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("dipraj");
var add = function (a, b) {
    return a + b;
};
var addd = add(2, 5);
console.log(addd);
var introduce = function (_a) {
    var name = _a.name, age = _a.age, hobby = _a.hobby;
    console.log("Hello, my name is  " + name + ", And I'm " + age + "!, my hobby is " + hobby);
};
introduce({
    name: "Dipraj Howlader",
    age: 12,
    hobby: "Sleeping"
});
var getArray = function (arr) {
    return arr;
};
var arr = getArray([1, 2, 43, 4]);
console.log(arr);
var dtr = getArray(['1edrew', 'hjdfhjddfjh dfndj']);
console.log(dtr);
// enum
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thr"] = "THR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Sat);
