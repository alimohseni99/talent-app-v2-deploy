import { Separator } from "@/components/ui/separator";
import { AccordionBoard } from "./accordion/accordion-board";
import { AverageScore } from "./average-score";
import { SpiderGraph } from "./spider-graph";
import { H2 } from "@/components/ui/header/header-h2";
import { scoresService } from "../instance";
import { EditScoreForm } from "./accordion/edit-score-form";

export async function ScoreBoard() {
  const hardcodedUserId = 2;
  const developerScore =
    await scoresService.getDeveloperScoreById(hardcodedUserId);

  return (
    <section>
      <Separator className="my-4" />
      <H2>Salt Scoring</H2>
      <AverageScore averageScore={developerScore.averageScore} />
      <SpiderGraph developerScore={developerScore} />
      <AccordionBoard developerScore={developerScore} />
    </section>
  );
}
