import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";
export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>;
  create(answerComment: AnswerComment): Promise<void>;
  findManyByAnswerId(
    answerId: string,
    params: PaginationParams
  ): Promise<AnswerComment[]>;
  delete(answerComment: AnswerComment): Promise<void>;
}
