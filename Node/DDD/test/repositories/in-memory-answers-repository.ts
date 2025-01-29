import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswersRepository } from "@/domain/forum/application/repositories/answer-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";

export class InMemoryAnswersRepository implements AnswersRepository {
  answers: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.answers.push(answer);
  }

  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.answers
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20);
    return answers;
  }

  async findById(id: string) {
    const answer = this.answers.find((answer) => answer.id.toString() === id);
    if (!answer) return null;
    return answer;
  }

  async save(answer: Answer): Promise<void> {
    const itemIndex = this.answers.findIndex((item) => item.id === answer.id);

    this.answers[itemIndex] = answer;
  }

  async delete(answer: Answer) {
    const itemIndex = this.answers.findIndex((item) => item.id === answer.id);

    this.answers.splice(itemIndex, 1);
  }
}
