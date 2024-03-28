const user1 = {
    username: "Neeraj",
    followers: 0
}
const user2 = user1;
// console.log(user1.followers)  // 1
// console.log(user2.followers)  // 1


user2.followers = user1.followers++
console.log(user1.followers)
console.log(user2.followers)
