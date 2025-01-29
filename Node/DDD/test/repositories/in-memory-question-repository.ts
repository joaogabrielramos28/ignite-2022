import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionRepository implements QuestionsRepository {
  questions: Question[] = [];

  async findById(id: string) {
    const question = this.questions.find(
      (question) => question.id.toString() === id
    );
    if (!question) return null;
    return question;
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.questions
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20);
    return questions;
  }

  async create(question: Question): Promise<void> {
    this.questions.push(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.slug.value === slug
    );

    if (!question) return null;
    return question;
  }

  async save(question: Question): Promise<void> {
    const itemIndex = this.questions.findIndex(
      (item) => item.id === question.id
    );

    this.questions[itemIndex] = question;
  }

  async delete(question: Question) {
    const itemIndex = this.questions.findIndex(
      (item) => item.id === question.id
    );

    this.questions.splice(itemIndex, 1);
  }
}
