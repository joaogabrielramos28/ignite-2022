import { AnswerQuestionUseCase } from "./answer-question";
import { InMemoryAnswersRepository } from "../../../../../test/repositories/in-memory-answers-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;
describe("Answer Question", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("Should be able to create a answer", async () => {
    const result = await sut.execute({
      questionId: "1",
      instructorId: "1",
      content: "Answer content",
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryAnswersRepository.answers[0]).toEqual(result.value?.answer);
  });
});
