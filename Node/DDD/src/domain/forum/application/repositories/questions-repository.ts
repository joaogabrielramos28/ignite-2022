import { Question } from "../../enterprise/entities/question";
import { PaginationParams } from "../../../../core/repositories/pagination-params";

export interface QuestionsRepository {
  findById(id: string): Promise<Question | null>;
  create(question: Question): Promise<void>;
  findBySlug(slug: string): Promise<Question | null>;
  save(question: Question): Promise<void>;
  findManyRecent(params: PaginationParams): Promise<Question[]>;
  delete(question: Question): Promise<void>;
}
