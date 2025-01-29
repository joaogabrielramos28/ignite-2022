import { InMemoryQuestionRepository } from "../../../../../test/repositories/in-memory-question-repository";
import { makeQuestion } from "../../../../../test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { EditQuestionUseCase } from "./edit-question";
import { NotAllowedError } from "./errors/not-allowed-error";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: EditQuestionUseCase;

describe("Edit Question ", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new EditQuestionUseCase(inMemoryQuestionRepository);
  });
  it("Should be able to edit a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
        slug: Slug.create("question-slug"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryQuestionRepository.create(newQuestion);
    await sut.execute({
      authorId: "author-1",
      questionId: newQuestion.id.toValue(),
      title: "New title",
      content: "New content",
    });

    expect(inMemoryQuestionRepository.questions[0]).toMatchObject({
      title: "New title",
      content: "New content",
    });
  });
  it("Should not be able to edit a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
        slug: Slug.create("question-slug"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryQuestionRepository.create(newQuestion);

    const result = await sut.execute({
      authorId: "author-2",
      questionId: newQuestion.id.toValue(),
      title: "New title",
      content: "New content",
    });
    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(NotAllowedError);
  });
});
