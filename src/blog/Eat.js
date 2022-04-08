import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";

const BlogItem = styled.div`
  padding: 2rem;
  h3 {
    padding-bottom: 2rem;
  }
`;

export const DinnerIdea = () => {
  return (
    <BlogItem>
      <h3>幾個晚餐的idea</h3>
      <ul>
        <li>
          雞蛋鍋：打幾顆蛋放進去，看要搭配什麼，都不搭也可以，湯底自由變換。
        </li>
        <li>蘿蔔鍋：肉可以選雞肉、魚肉</li>
        <li>泡麵鍋：可以丟泡麵再丟肉進去，但不要太常吃會肥。</li>
        <li>
          味噌鍋：買外面的味噌當湯底再加食材。目前實驗發現我挖二大匙應該就OK了。
        </li>
        <li>青菜豆腐鍋：全聯買30元豆腐，再加大陸Ａ菜，好吃。</li>
        <li>市售湯底鍋：全聯買湯底，可是通常很鹹，要煮一大鍋或加水來稀釋。</li>
      </ul>
    </BlogItem>
  );
};

const eatRouteList = [
  { title: "晚餐煮什麼好呢", path: "dinnerIdea", element: DinnerIdea },
];

export const Eat = () => {
  return (
    <div>
      <Link to="dinnerIdea">晚餐煮什麼好呢</Link>
      <Routes>
        {eatRouteList.map((x, index) => {
          const { element, path } = x;
          const MyComponent = element;
          return <Route path={path} key={index} element={<MyComponent />} />;
        })}
      </Routes>
    </div>
  );
};
