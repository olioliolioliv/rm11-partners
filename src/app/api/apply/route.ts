import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schemas";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = applicationSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const application = {
      id: `app_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      ...result.data,
    };

    // Ensure data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true });

    // Read existing applications or start fresh
    let applications = [];
    try {
      const raw = await fs.readFile(DATA_FILE, "utf-8");
      applications = JSON.parse(raw);
    } catch {
      // File doesn't exist yet — that's fine
    }

    applications.push(application);
    await fs.writeFile(DATA_FILE, JSON.stringify(applications, null, 2));

    return NextResponse.json(
      { message: "Application submitted successfully", id: application.id },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
