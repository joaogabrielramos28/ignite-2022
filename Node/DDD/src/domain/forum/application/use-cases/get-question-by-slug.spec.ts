import { InMemoryQuestionRepository } from "../../../../../test/repositories/in-memory-question-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "../../../../../test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository);
  });
  it("Should be able to get a question by slug", async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create("question-slug"),
    });

    inMemoryQuestionRepository.create(newQuestion);
    const { question } = await sut.execute({
      slug: "question-slug",
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRepository.questions[0].id).toEqual(question.id);
    expect(question.title).toEqual(newQuestion.title);
  });
});
