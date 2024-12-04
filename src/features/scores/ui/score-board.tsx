import { Separator } from "@/components/ui/separator";
import { AccordionBoard } from "./accordion/accordion-board";
import { AverageScore } from "./average-score";
import { SpiderGraph } from "./spider-graph";
import { HeaderH2 } from "@/components/ui/header/header-h2";
import { scoresService } from "../instance";

export async function ScoreBoard() {
  const developerScore = await scoresService.getDeveloperScoreById();

  return (
    <section>
      <Separator className="my-4" />
      <HeaderH2>Salt Scoring</HeaderH2>
      <AverageScore averageScore={developerScore.averageScore} />
      <SpiderGraph developerScore={developerScore} />
      <AccordionBoard developerScore={developerScore} />
    </section>
  );
}
