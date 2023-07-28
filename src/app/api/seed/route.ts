import { SeedService } from "@/services";

const seedService = new SeedService();

export async function GET() {
  try {
    await seedService.seed();
    return new Response(
      JSON.stringify({ ok: true, message: "Database seeded" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
