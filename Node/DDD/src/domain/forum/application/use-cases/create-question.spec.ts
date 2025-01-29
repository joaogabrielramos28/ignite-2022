import { CreateQuestionUseCase } from "./create-question";
import { InMemoryQuestionRepository } from "../../../../../test/repositories/in-memory-question-repository";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: CreateQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository);
  });
  it("Should be able to create a question", async () => {
    const { question } = await sut.execute({
      authorId: "1",
      title: "Question title",
      content: "Answer content",
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRepository.questions[0].id).toEqual(question.id);
  });
});
