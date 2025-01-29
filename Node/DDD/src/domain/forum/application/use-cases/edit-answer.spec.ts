import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { EditAnswerUseCase } from "./edit-answer";
import { InMemoryAnswersRepository } from "../../../../../test/repositories/in-memory-answers-repository";
import { makeAnswer } from "../../../../../test/factories/make-answer";

let inMemoryAnswerRepository: InMemoryAnswersRepository;
let sut: EditAnswerUseCase;

describe("Edit Answer ", () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository();
    sut = new EditAnswerUseCase(inMemoryAnswerRepository);
  });
  it("Should be able to edit a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("answer-1")
    );

    inMemoryAnswerRepository.create(newAnswer);
    await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: "author-1",
      content: "New content",
    });

    expect(inMemoryAnswerRepository.answers[0]).toMatchObject({
      content: "New content",
    });
  });
  it("Should not be able to edit a question", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryAnswerRepository.create(newAnswer);

    await expect(() => {
      return sut.execute({
        authorId: "author-2",
        content: "New content",
        answerId: newAnswer.id.toValue(),
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
