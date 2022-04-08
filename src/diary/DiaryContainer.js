import { ContentCenterWrapper } from "../styles/appStyleConfig";
import { Jan242022 } from "./2022/Jan/Jan242022";
import { Jan252022 } from "./2022/Jan/Jan252022";
import { Jan262022 } from "./2022/Jan/Jan262022";
import { Feb212022 } from "./2022/Feb/Feb212022";

export const DiaryContainer = () => {
  return (
    <div>
      <ContentCenterWrapper>
        <Jan242022 />
        <Jan252022 />
        <Jan262022 />
        <Feb212022 />
      </ContentCenterWrapper>
    </div>
  );
};
