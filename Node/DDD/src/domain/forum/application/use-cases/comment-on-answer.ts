import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";
import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository";
import { AnswersRepository } from "../repositories/answer-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
interface CommentOnAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
  content: string;
}
interface CommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment;
}
export class CommentOnAnswerUseCase {
  constructor(
    private answersRepository: AnswersRepository,
    private answerCommentsRepository: AnswerCommentsRepository
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);
    if (!answer) {
      throw new Error("Answer not found.");
    }
    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    });
    await this.answerCommentsRepository.create(answerComment);
    return {
      answerComment,
    };
  }
}
