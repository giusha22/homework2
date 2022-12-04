import './App.css';
// import firstImg from "./img/office.jpg"

function App() {
 
//   1) შექმენით ორი კომპონენტი Parent და Child(სახელები შეგიძლიათ შეცვალოთ):
// Parent კომპონენტმა უნდა ჩააწოდოს Child კომპონენტს იუზერების მასივი( ობიექტების მასივი, სადაც თითოეული ობიექტი შეიცავს იუზერის სახელს,ასაკს,გვარს და აიდის), თუმცა მასივი შეიძლება ცარიელი იყოს.ასევე Child კომპონენტმა უნდა მიიღოს მეორე boolean prop-ი: isUserLoggedIn.
// .თუ იუზერი დალოგინებულია(isUserLoggedIn=true) Child კომპონენტმა უნდა დაარენდეროს იუზერების შესახებ ინფორმაცია(სახელი,გვარი ასაკი)  ხოლო თუ იუზერების მასივი ცარიელია უნდა გამოიტანოს ტექსტი: no users in the system.
// თუ იუზერი არ არის დალოგინებული Child კომპონენტმა უნდა გამოიტანოს ტექსტი:you are not authorized to see user list.

// 2) შექმენით Wrapper,Navbar და Footer კომპონენტები. Navbar-ში და Footer-ში შეგიძლია უბრალოდ ტექსტიც გამოიტანოთ. Wrapper კომპონენტმა უნდა დაარენდეროს Navbar და Footer კომპონენტები, ხოლო მათ შორის ყველა children,რომელსაც Wrapper-ი მიიღებს. გამოიყენეთ Wrapper კომპონენტი ისე,რომ აპლიკაციაში ნებისმიერ ადგილას დამატებული კომპონენტი მოქცეული იყოს navbar-სა და footer-ს შორის.

 //task 1
  const Users = [
    {name: "Giorgi", lastName : "Mtsituri", age: 25, id: 16001001000},
    {name: "Goga", lastName : "Sxirtladze", age: 35, id:15001001000 },
    {},
    {name: "Nana", lastName : "Cigriashvili", age: 32, id:16001021212}
  ];
  const Parent = ()=>{
    return console.log("parent");
  }
  const Child = ()=>{
    return console.log("child");
  }


  return (
    <>
    {Users.map((user) =>{
      return <h1 key={user.name}> name: {user.name} lastname: {user.lastName} age: {user.age} id: {user.id} </h1>
    })}
    </>
  );
}

export default App;
