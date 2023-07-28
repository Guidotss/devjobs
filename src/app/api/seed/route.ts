import { SeedService } from "@/services"; 

const seedService = new SeedService();

export async function GET() {
    seedService.seed(); 
    return new Response(JSON.stringify({ message: "Hello World" })); 
}