import { PrismaClient } from "@prisma/client"; 
import data from '@/data/data.json'; 
import { Job } from "@/interfaces";

export class SeedService {
    private prisma = new PrismaClient();

    async seed() {
        await this.prisma.$connect();
        await this.prisma.job.deleteMany();
        
        const dataSeeded = data.map((job: Job) => {
            return {
                company: job.company,
                logo: job.logo,
                logoBackground: job.logoBackground,
                position: job.position,
                postedAt: job.postedAt,
                contract: job.contract,
                location: job.location,
                website: job.website,
                apply: job.apply,
                description: job.description,
                requirements: {
                    content: job.requirements.content,
                    items: job.requirements.items
                },
                role: {
                    content: job.role.content,
                    items: job.role.items

                }
            }
        });

        await this.prisma.job.createMany({
            data: dataSeeded
        }); 

        console.log('Data seeded successfully');

        await this.prisma.$disconnect();
    }
}