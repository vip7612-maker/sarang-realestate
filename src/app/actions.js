"use server";
import { db } from "@/lib/db";

export async function submitInquiry(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const inquiry = formData.get("inquiry") || "";

  if (!name || !phone) {
    return { success: false, message: "이름과 연락처는 필수 입력 항목입니다." };
  }

  try {
    await db.execute({
      sql: "INSERT INTO requests (name, phone, inquiry) VALUES (?, ?, ?)",
      args: [name, phone, inquiry],
    });
    return { success: true, message: "상담 문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다." };
  } catch (error) {
    console.error("DB Insert Error:", error);
    return { success: false, message: "서버 오류로 인해 접수에 실패했습니다." };
  }
}
