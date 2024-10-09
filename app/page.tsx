import { Guidelines, HeadingWithVideo, Notes, QuestionArrays, Timeline } from "@/components";
import { Tute } from "@/components/Tute";

export default function Home() {
  return (
    <div className="space-y-7">
      <HeadingWithVideo />
      <Timeline />
      <QuestionArrays />
      <Notes />
      <Guidelines />
      <Tute />
    </div>
  );
}
