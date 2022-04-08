import { DiaryContent } from "../../diaryStyleConfig";
import lemon from "./../../images/lemon.webp";

export const Feb212022 = () => {
  return (
    <DiaryContent>
      <h3>Feb 21 2022</h3>
      <p>
        我把進擊的巨人又重刷了一遍，實在太好看了，倒底要怎麼樣才能編出這樣的劇？
      </p>
      <p>今天公司的Yves請吃餅</p>
      <img src={lemon} alt="檸檬餅" />
      <p>我拿了二個，檸檬餅還蠻好吃的，香氣四溢，另一個明天再吃</p>
    </DiaryContent>
  );
};
