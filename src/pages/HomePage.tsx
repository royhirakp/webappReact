import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
//demo
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../app/store";
const HomePage = () => {
  // const [co]
  // const dispatch = useAppDispatch();
  // const dispatch2 = useDispatch<AppDispatch>();
  // const value2 = useSelector((s: RootState) => s);
  // console.log(value2, "=== value 2");

  // const value = useAppSelector((s) => s);
  // console.log(value);
  return (
    <>
      <h2>home page</h2>
      <>{/* DEMO */}</>
      {/* <h1>count : {value.counter.value}</h1> */}
      {/* <h1>count 2: {value2}</h1> */}
      {/* <button onClick={() => dispatch2(inrement(5))}>button</button> */}
      <div>
        <Header />
        <Main />
      </div>
    </>
  );
};

export default HomePage;
