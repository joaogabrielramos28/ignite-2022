import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryAnswersRepository } from "../../../../../test/repositories/in-memory-answers-repository";
import { DeleteAnswerUseCase } from "./delete-answer";
import { makeAnswer } from "../../../../../test/factories/make-answer";

let inMemoryAnswerRepository: InMemoryAnswersRepository;
let sut: DeleteAnswerUseCase;

describe("Delete Answer ", () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository();
    sut = new DeleteAnswerUseCase(inMemoryAnswerRepository);
  });
  it("Should be able to delete a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryAnswerRepository.create(newAnswer);
    await sut.execute({
      questionId: "question-1",
      authorId: "author-1",
    });

    expect(inMemoryAnswerRepository.answers).toHaveLength(0);
  });
  it("Should not be able to delete a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryAnswerRepository.create(newAnswer);

    await expect(() => {
      return sut.execute({
        questionId: "question-1",
        authorId: "author-2",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
