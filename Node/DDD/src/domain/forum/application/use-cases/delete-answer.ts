import { AnswersRepository } from "../repositories/answer-repository";

interface DeleteAnswerUseCaseRequest {
  authorId: string;
  questionId: string;
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(questionId);

    if (!answer) {
      throw new Error("Answer not found");
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error("Not allowed.");
    }

    await this.answersRepository.delete(answer);

    return {};
  }
}
