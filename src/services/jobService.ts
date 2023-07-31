import { PrismaClient } from "@prisma/client";

export class JobService {
  private prisma = new PrismaClient();
  async getJobs() {
    try {
      await this.prisma.$connect();
      const jobs = await this.prisma.job.findMany();
      this.prisma.$disconnect();
      if (!jobs) {
        return null;
      }
      return jobs;
    } catch (error) {
      console.log(error);
      throw new Error(
        `An error has ocurred while trying to get jobs: ${error}`
      );
    }
  }
}
